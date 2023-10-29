# Technical

v.0.121 - May 30, 2023

## Overview

This document is organized to make it easier for developers to understand how cooperative application works. This technical content created by [Nur Hardyanto](https://www.linkedin.com/in/nurhardy), a senior developer in this team. Me as a full-stack developer responsible to implement this design.

## Kontrak Pinjaman/Kontrak Simpanan

In every loan activity or change of mandatory fee agreement, all cooperative members are bound by a contract. The type of contract in the application consists of 3 types:

- **Derivative Contract**: This is an inherent contract that is attached to the member and is valid during membership. An example is the simpanan pokok contract.
- **Periodical Contract**: A mandatory contract for each member that is for a certain period of time and will be renewed in the form of a new contract when the period is over. An example is a simpanan wajib contract per year (per year the nominal is different).
- **Flexible Contract**: Contracts that can be flexibly assigned according to the member's needs. For example, Loan contract

The master contract is stored in the `ref_loan_contracts` table. In the table, there is a handler column which contains the class handler of the contract.

## Journal Entry

Journal transaction entries are stored in the `trx_journal` table. Each entry is attached to the loan/savings contract ID and the corresponding member ID for that transaction, and has two timestamps, namely the transaction period timestamp, and the entry timestamp (Date of transaction entry by admin).

1. **Categories and Transaction Types**

    Each journal transaction entry has category and type attributes.

    - Saving category, deposit transaction category
    - Loan category, loan transaction category
    - Service category, cooperative service transaction category (service fee, admin fee, etc.)

    The transaction types are as follows:

    | No | Code | Type | Description | Nominal |
    | :--- | :--- | :--- | :--- | :--- |
    | 1 | TGH | Determination | Transaction "billings" of principal/compulsory deposits, or fees to be deposited by members | Positive |
    | 2 | DC | Discount | Bill discount transaction, the opposite of determination | Negative |
    | 3 | DP | Deposit | Deposit transaction | Negative |
    | 4 | WD | Withdrawal | Deposit withdrawal transactions, as opposed to deposits | Positive |
    | 5 | BN | Bonus | Profit sharing/bonus transactions, similar to deposits, but sourced from profit sharing funds | Negative |
    | 6 | LN | Loan | Loan transaction | Positive |
    | 7 | PAY | Payment | Loan fee payment transaction | Negative |
    | 8 | RV | Reversal | Payment cancellation transaction, as opposed to payment | Positive |
    | 9 | PNL | Penalty | Fine "charge" transaction | Positive |
    | 10 | SL | Balance | Recapitulation transaction, only used as a cache to speed up the calculation process, is not a source-of-truth and is the result of calculations from previous transactions. | Positive/Negative |

    For the recapitulation process, you can do the Summary (SUM) formula for the nominal column in the journal table, if it is negative, it means overpayment (Deposits), if it is positive, it means receivables (underpayment).

2. **Example of Recording Deposits**

    Budi is a new employee and has just registered as a cooperative member in 2023. As a new cooperative member, Budi has a mandatory simpanan wajib according to the applicable agreement (In this case, in 2023, for example Rp. 100.000). Budi was registered in the system on February 10, 2023. And just deposit the next day.

    Thus, Budi will be assigned to 2 contracts, namely the simpanan pokok contract (#001) and the simpanan wajib contract (#002). In the following year, the simpanan wajib contract is renewed with a new nominal (ID #003, Rp. 150.000).

| ID TRX | Date | User | Contract | Category | Type | Nominal | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 001 | 2023-02-10 | Budi | #001 | Saving | Determination | 300.000 | new Simpanan Pokok |
| 002 | 2023-02-10 | Budi | #002 | Saving | Determination | 100.000 | new Simpanan Wajib |
| 003 | 2023-02-11 | Budi | #001 | Saving | Deposit | (-300.000) | |
| 004 | 2023-02-11 | Budi | #002 | Saving | Deposit | (-100.000) | |
| 005 | 2023-03-01 | Budi | #001 | Saving | Balance | (-300.000) | Simpanan Pokok balance stays the same |
| 006 | 2023-03-01 | Budi | #002 | Saving | Balance | (-100.000) | |
| 007 | 2023-03-01 | Budi | #002 | Saving | Determination | 100.000 | |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0xx | 2023-12-31 | Budi | #002 | Saving | Withdrawal | 1.100.000 | |
| 0xx | 2023-01-01 | Budi | #001 | Saving | Balance | (-300.000) | Simpanan Pokok balance stays the same |
| 0xx | 2023-01-02 | Budi | #003 | Saving | Determination | 150.000 | Simpanan Wajib renewal |
| --- | --- | --- | --- | --- | --- | --- | --- |

3. **Example of Recording Loans and Service Fees**

On March 10, 2023, Budi as applied for a loan of Rp. 12.000.000 in installments over 24 months. Based on the applicable interest rate, a flat monthly service fee of 1% is charged. After that Budi paid installments on April 15 and May 13. In June, Budi forgot to pay the installments so the following month Budi paid the installments and arrears.

Suppose Budi is subject to a loan contract (ID #010).

| ID TRX | Date | User | Contract | Category | Type | Nominal | Flag | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 001 | 2023-03-10 | Budi | #010 | Loan | Loan | 12.000.000 | | Loan application |
| 002 | 2023-04-01 | Budi | #010 | Loan | Balance | 12.000.000 | | No loan payment last month |
| 003 | 2023-04-01 | Budi | #010 | Service | Balance | 0 | | No service fee last month |
| 004 | 2023-04-01 | Budi | #010 | Loan | Determination | 500.000 | | Loan fee for this month |
| 005 | 2023-04-01 | Budi | #010 | Service | Determination | 120.000 | | Service fee for this month | 
| 006 | 2023-04-15 | Budi | #010 | Loan | Payment | (-500.000) | 1^ |
| 007 | 2023-04-15 | Budi | #010 | Service | Payment | (-120.000) | 1^ |
| 008 | 2023-05-01 | Budi | #010 | Loan | Balance | 11.500.000 | | |
| 009 | 2023-05-01 | Budi | #010 | Service | Balance | 0 | | Service paid last month |
| 010 | 2023-05-01 | Budi | #010 | Loan | Determination | 500.000 | 1^^ | |
| 011 | 2023-05-01 | Budi | #010 | Service | Determination | 12.000 | 1^^ | |
| 012 | 2023-05-13 | Budi | #010 | Loan | Payment | (-500.000) | 1^ |
| 013 | 2023-05-13 | Budi | #010 | Service | Payment | (-12.000) | 1^ |
| 014 | 2023-06-01 | Budi | #010 | Loan | Balance | 11.000.000 | | |
| 015 | 2023-06-01 | Budi | #010 | Service | Balance | 0 | | |
| 016 | 2023-06-01 | Budi | #010 | Loan | Determination | 500.000 | 1^^^ | |
| 017 | 2023-06-01 | Budi | #010 | Service | Determination | 12.000 | 1^^^ | |
| 018 | 2023-07-01 | Budi | #010 | Loan | Balance | 11.000.000 | | Determination was not paid |
| 019 | 2023-07-01 | Budi | #010 | Service | Balance | 12.000 | | Determination was not paid |
| 020 | 2023-07-01 | Budi | #010 | Loan | Determination | 500.000 | 1^^^ | |
| 021 | 2023-07-01 | Budi | #010 | Service | Determination | 12.000 | 1^^^ | |
| 022 | 2023-07-20 | Budi | #010 | Loan | Payment | (-1.000.000) | 1^^^ | paid for 2 months |
| 023 | 2023-07-20 | Budi | #010 | Service | Payment | (-24.000) | 1^^^ | paid for 2 months |
| 024 | 2023-08-01 | Budi | #010 | Loan | Balance | 10.000.000 | | |
| 025 | 2023-08-01 | Budi | #010 | Service | Balance | 0 | | |

^ Flagged settle at the time of insert payment on April 15, 2023. <br>
^^ Flagged settle at the time of insert payment on May 13, 2023. <br>
^^^ Flagged settle at the time of insert payment on July 20, 2023 (At the same time pay arrears) <br>

**Note**: On determination type transactions, the penalty has a `settle` flag indicating that the bill has been clearly paid.
