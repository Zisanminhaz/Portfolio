# Store Sales & Employee Performance Tracker (Excel)

A management-reporting workbook for an 8-showroom fashion retail chain in Bangladesh. It turns 12 messy monthly sales files into a linked 4-table model with Power Query and XLOOKUP, applies bonus and commission rules, and presents store and employee performance in a pivot-based dashboard with slicers.

Built entirely in Excel: no VBA, macros or add-ins.

![Dashboard](screenshots/01_dashboard.png)

## Highlights

- **Power Query automation** — combines 12 monthly files from a folder and cleans them (trim, case fixes, blank rows, duplicate invoices); next month needs only *Refresh All*
- **Linked 4-table workbook** — Sales, Stores, Employees and Targets connected with XLOOKUP, including a chained lookup
- **Monthly actuals** — SUMIFS with an EOMONTH date window
- **Business rules** — IF + AND bonus eligibility, nested-IF performance rating
- **Tiered commission** — XLOOKUP approximate match (`-1`) against a configurable slab table
- **Interactive dashboard** — pivot charts, KPI cells, StoreName/Role slicers and a Month timeline connected to every pivot
- **Employee profile card** — dropdown-driven individual summary

## Workbook

| Sheet | Contents |
|---|---|
| **Dashboard** | KPIs, slicers, timeline, three pivot charts |
| **Employee_Card** | Dropdown employee profile |
| **Pivots** | Store, Top 10 employee, monthly and KPI pivots |
| **Targets_Attendance** | Employee × month calculation table (480 rows) |
| **Employees · Stores · Sales** | Tables loaded by Power Query |
| **Settings** | Commission slab |

## Data flow

```
Monthly_Sales/ (12 CSV) ──Power Query: combine + clean──► Sales (48,598 rows)
Master/ Stores · Employees · Targets_Attendance ──────────► tables
                                   │
          XLOOKUP + SUMIFS + IF/AND + commission slab
                                   ▼
                        Targets_Attendance (480 rows)
                                   ▼
                  PivotTables ──► Dashboard + slicers + timeline
```

## Screenshots

**One slicer click filters every chart and KPI** (Dhanmondi 27 selected)

![Filtered dashboard](screenshots/02_dashboard_filtered.png)

**Power Query — combining and cleaning 12 monthly files**

![Power Query](screenshots/03_power_query.png)

**Calculation table — IF + AND bonus rule and performance rating**

![Formulas](screenshots/04_formulas_bonus_rating.png)

**PivotTables** · **Employee profile card**

![Pivots](screenshots/05_pivots.png)

![Employee card](screenshots/06_employee_card.png)

## Key formulas

```excel
Actual sales  =SUMIFS(Sales[SalesAmount], Sales[EmployeeID], [@EmployeeID],
                      Sales[Date], ">="&[@Month], Sales[Date], "<="&EOMONTH([@Month],0))

Bonus         =IF(AND([@[Achievement%]]>=100%, [@[Attendance%]]>=90%), "Eligible", "Not Eligible")

Commission    =XLOOKUP([@ActualSales], CommissionSlab[MinSales], CommissionSlab[Rate], 0, -1)
```

All formulas: [docs/formulas.md](docs/formulas.md) · Power Query M code: [power-query/queries.m](power-query/queries.m)

## Insights (2025)

- The chain sold **৳190.4M** against a **৳189.3M** target (**100.6%**), paying **৳4.17M** in commission.
- **Dhanmondi 27** and **Uttara Sector 7** beat target by 5%; **Mirpur 10** reached only 95%. The largest showroom, **Bashundhara City**, missed its target (98%).
- Sales peak in **March** (Eid-ul-Fitr season) and are lowest in **February**.
- **Tasnim Ahmed** is the top performer (৳7.34M, 116% of target). **Sumaiya Talukder** ranks in the top 10 by sales but did not earn a bonus in any month, because she never reached her monthly target — revenue alone hides target performance.
- The AND rule matters: one employee hit 104% of target in June but received no bonus because attendance was 85%.

## Problems solved

1. **Dirty source files.** Mixed case and stray spaces in categories and employee IDs would split pivot categories and break XLOOKUP (`#N/A`); duplicate invoices would inflate sales and award bonuses wrongly. Power Query standardises and de-duplicates every file on refresh.
2. **Averaging percentages.** Averaging row-level Achievement% gives equal weight to small and large targets. A pivot calculated field (total actual ÷ total target) gives the correct weighted figure.
3. **Tiered commission without nested IFs.** XLOOKUP with match mode `-1` finds the correct slab, and rates sit in a `Settings` table that management can edit.
4. **Slicers not filtering everything.** Each slicer and the timeline is linked to all four pivots through Report Connections, and KPIs use GETPIVOTDATA so they respond too.

## How to use

1. Open `Store_Sales_Tracker.xlsx` in Excel for Microsoft 365 or Excel 2021+ (XLOOKUP required). Click **Enable Content** if prompted.
2. Power Query paths point to the author's machine. To refresh:
   **Data → Get Data → Data Source Settings → Change Source**, point the folder source to `data/Monthly_Sales` and each file source to `data/Master/…`, then **Data → Refresh All**.
3. To add a month, place the new CSV (same columns) in `data/Monthly_Sales` and click **Refresh All**.

To regenerate the data: `pip install pandas numpy` then `python scripts/generate_dataset.py`.

## Repository structure

```
├── Store_Sales_Tracker.xlsx
├── data/
│   ├── Monthly_Sales/       12 raw monthly CSV files (with data-quality issues)
│   └── Master/              Stores, Employees, Targets_Attendance
├── power-query/queries.m    Power Query M code
├── docs/
│   ├── formulas.md          Every formula with explanation
│   └── build_guide.md       Build steps, pivots, dashboard, validation figures
├── scripts/generate_dataset.py
└── screenshots/
```

## Dataset

The data is **synthetic**, generated with a seeded Python script to model a Bangladeshi fashion retail chain (8 showrooms, 40 sales staff, 2025). Data-quality issues were introduced on purpose to demonstrate cleaning. It contains no real company or personal data.

## Tools

Microsoft Excel · Power Query · XLOOKUP · SUMIFS · PivotTables · PivotCharts · Slicers · Timeline · Python (data generation)

## Author

**Minhaz Alam Jisan** — MIS / Data Analyst
[LinkedIn](https://www.linkedin.com/in/minhazjisan)
