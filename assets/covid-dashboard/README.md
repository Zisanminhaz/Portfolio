# COVID-19 Global Dashboard (Power BI)

A Power BI dashboard tracking the spread of COVID-19 across 187 countries from 22 January to 27 July 2020: confirmed cases, deaths, recoveries and active cases, with a world map, WHO-region breakdown, country ranking and growth trend, filtered by a WHO-region slicer.

![Dashboard](screenshots/dashboard.png)

## Highlights

- **Data preparation** — reduced the Johns Hopkins daily dataset to a clean country-level table (49,068 rows) in Excel
- **DAX measures** — confirmed, recovered, active and death totals
- **Interactive report** — KPI cards, world bubble map, WHO-region donut, country ranking and monthly trends, filtered by a WHO-region slicer

## Report

| Visual | Shows |
|---|---|
| KPI cards | Total Confirmed · Total Recovered · Total Active · Total Deaths |
| Map | Confirmed cases by country |
| Donut | Deaths by WHO region |
| Bar chart | Confirmed by country |
| Line charts | Confirmed by month; confirmed vs deaths by month |
| Slicer | WHO region — filters every visual |

## Key DAX

```dax
Total Confirmed = SUM ( covid_19_clean_complete[Confirmed] )
Total Deaths    = SUM ( covid_19_clean_complete[Deaths] )
```

All measures, including latest-date variants: [dax/measures.dax](dax/measures.dax)

## How to read the numbers

The source columns are **cumulative** (each day already contains all earlier cases), and the report measures sum every daily row. The cards therefore show **case-days** accumulated over the period (e.g. 829M confirmed), not the number of people infected. The actual totals on the last day of the data are:

| Confirmed | Deaths | Recovered | Active | Case fatality |
|---|---|---|---|---|
| 16.48M | 654K | 9.47M | 6.36M | 3.97% |

Latest-date measures that return these values are included in [dax/measures.dax](dax/measures.dax). The data covers **22 Jan – 27 Jul 2020**.

## Insights (27 Jul 2020, latest-date figures)

- **Rapid growth:** global confirmed cases rose from 0.87M at the end of March to 16.5M by 27 July — almost quadrupling in April, then rising 50–90% each month through July.
- **Concentration:** the **US (4.29M)**, **Brazil (2.44M)** and **India (1.48M)** account for half of all confirmed cases.
- **Deaths by region:** the **Americas (52%)** and **Europe (32%)** account for 84% of reported deaths.
- **Outcomes:** 57.4% of confirmed cases had recovered and 3.97% had died; about 6.4M cases were still active.

## Repository structure

```
├── covid_dashboard.pbix              Power BI report
├── data/
│   ├── raw/                          Kaggle CSV files (covid_19_clean_complete.csv is the report source)
│   └── clean/covid_clean.xlsx        Cleaned table used by the report
├── dax/measures.dax                  DAX measures
├── docs/build_guide.md               Sources, cleaning, visuals, validation, limitations
├── scripts/clean_data.py             Reproduces the cleaning and headline figures
└── screenshots/
```

## How to open

1. Install [Power BI Desktop](https://powerbi.microsoft.com/desktop/) (free, Windows).
2. Open `covid_dashboard.pbix`.
3. If data does not load: **Transform data → Data source settings → Change Source** → `data/clean/covid_clean.xlsx` → **Refresh**.

## Dataset

[COVID-19 Dataset](https://www.kaggle.com/datasets/imdevskp/corona-virus-report) by Devakumar K. P. on Kaggle, based on the [Johns Hopkins University CSSE](https://github.com/CSSEGISandData/COVID-19) data and Worldometer.

## Tools

Power BI Desktop · DAX · Excel · Python (pandas)

## Author

**Minhaz Alam Jisan** — MIS / Data Analyst
[LinkedIn](https://www.linkedin.com/in/minhazjisan)
