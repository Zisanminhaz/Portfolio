/**
 * Minhaz Alam Jisan - Portfolio Interactivity
 * Featuring 5 Connected Open-Source Repositories:
 *  1. Retail MIS Analytics Dashboard (Power BI) — github.com/Zisanminhaz/retail-mis-dashboard-powerbi
 *  2. Store Sales & Employee Tracker (Excel) — github.com/Zisanminhaz/store-sales-employee-tracker-excel
 *  3. E-Commerce Sales & Customer Insights (Power BI) — github.com/Zisanminhaz/ecommerce-sales-customer-insights-powerbi
 *  4. COVID-19 Global Dashboard (Power BI) — github.com/Zisanminhaz/-Covid19-global-dashboard-Powerbi
 *  5. Olist E-Commerce MIS (SQL) — github.com/Zisanminhaz/olist-ecommerce-mis-sql
 *
 * Plus 3 Peer-Reviewed Research Publications (IEEE & ResearchGate)
 * And Verified IBM Coursera Credentials (IBM Data Analyst Professional Track)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  initThemeToggle();
  initMobileMenu();
  initProjectFiltering();
  initResearchFiltering();
  initScrollSpy();
});

/* ==========================================================================
   Theme Toggle System
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('mj-portfolio-theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const target = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', target);
      localStorage.setItem('mj-portfolio-theme', target);
      
      if (window.lucide) {
        lucide.createIcons();
      }
    });
  }
}

/* ==========================================================================
   Mobile Navigation Toggle
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Flagship Retail MIS Report Tabs & Lightbox
   ========================================================================== */
window.switchReportTab = function(tabKey, btnElement) {
  const card = btnElement.closest('.flagship-explorer-card');
  if (!card) return;

  const buttons = card.querySelectorAll('.explorer-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const tabs = card.querySelectorAll('.explorer-tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  const targetTab = document.getElementById(`tab-${tabKey}`);
  if (targetTab) targetTab.classList.add('active');

  if (window.lucide) {
    lucide.createIcons();
  }
};

/* ==========================================================================
   Flagship Store Sales Tracker (Excel) Tabs
   ========================================================================== */
window.switchExcelTab = function(tabKey, btnElement) {
  const card = btnElement.closest('.flagship-explorer-card');
  if (!card) return;

  const buttons = card.querySelectorAll('.explorer-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const tabs = card.querySelectorAll('.excel-tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  const targetTab = document.getElementById(`excel-tab-${tabKey}`);
  if (targetTab) targetTab.classList.add('active');

  if (window.lucide) {
    lucide.createIcons();
  }
};

/* ==========================================================================
   Flagship Olist E-Commerce MIS (SQL) Tabs
   ========================================================================== */
window.switchSqlTab = function(tabKey, btnElement) {
  const card = btnElement.closest('.flagship-explorer-card');
  if (!card) return;

  const buttons = card.querySelectorAll('.explorer-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const tabs = card.querySelectorAll('.sql-tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  const targetTab = document.getElementById(`sql-tab-${tabKey}`);
  if (targetTab) targetTab.classList.add('active');

  if (window.lucide) {
    lucide.createIcons();
  }
};

/* ==========================================================================
   Image Lightbox
   ========================================================================== */
window.openLightbox = function(imageSrc, captionText) {
  const lightbox = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (lightbox && img) {
    img.src = imageSrc;
    if (caption) caption.textContent = captionText || '';
    lightbox.classList.remove('hidden');
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('imageLightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
  }
};

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
window.showToast = function(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.innerHTML = `<i data-lucide="check-circle" class="icon-sm text-emerald"></i> <span>${message}</span>`;
  toast.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
};

/* ==========================================================================
   Research Category Filtering
   ========================================================================== */
function initResearchFiltering() {
  const filterPills = document.querySelectorAll('.pub-filter-pill');
  const pubCards = document.querySelectorAll('.pub-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-pubfilter');

      pubCards.forEach(card => {
        const categories = card.getAttribute('data-pubcategory') || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Interactive Research Publications Modal & BibTeX Engine
   ========================================================================== */
const researchDetails = {
  mango: {
    title: 'Explainable Hybrid InceptionV3-Vision Transformer Framework for Mango Leaf Disease Classification Using LIME and Grad-CAM',
    venue: 'IEEE QPAIN (Quality, Reliability, Security and Robustness in Heterogeneous Networks) • Dec 2025',
    link: 'https://ieeexplore.ieee.org/document/11546122',
    linkText: 'Open Official Paper on IEEE Xplore ↗',
    authors: 'Minhaz Alam Jisan, et al.',
    objective: 'Mitigate agricultural crop losses by building an ultra-accurate yet fully transparent automated diagnosis pipeline for mango leaf pathogens.',
    architecture: `
      <strong>Hybrid Neural Architecture:</strong>
      <ul>
        <li><strong>InceptionV3 Backbone:</strong> Extracts multi-scale localized spatial features and receptive fields from varying leaf lesion sizes.</li>
        <li><strong>Vision Transformer (ViT) Stage:</strong> Linear patch projection (16x16 tokens) processed through multi-head self-attention encoders to capture long-range contextual dependencies across the leaf blade.</li>
        <li><strong>Fusion Classification Head:</strong> Concatenated feature embeddings with dropout and dense layers for multi-class pathogen categorization.</li>
      </ul>
    `,
    explainability: `
      <strong>Dual-Tier Explainable AI (XAI) Protocol:</strong>
      <ul>
        <li><strong>Grad-CAM:</strong> Computes gradients of target disease classes with respect to final convolutional feature maps, producing coarse 2D heatmaps that highlight discriminative regions.</li>
        <li><strong>LIME:</strong> Perturbs superpixel segments of input leaf images to train locally faithful interpretable linear surrogate models, proving that predictions rely on biological lesion necrosis rather than background soil or lighting artifacts.</li>
      </ul>
    `,
    bibtex: `@inproceedings{jisan2025mango,
  title={Explainable Hybrid InceptionV3-Vision Transformer Framework for Mango Leaf Disease Classification Using LIME and Grad-CAM},
  author={Jisan, Minhaz Alam and others},
  booktitle={IEEE International Conference on Quality, Reliability, Security and Robustness in Heterogeneous Networks (QPAIN)},
  year={2025},
  url={https://ieeexplore.ieee.org/document/11546122}
}`
  },

  tea: {
    title: 'Lightweight CNNs and Explainable AI for Real-Time Tea Leaf Disease Detection',
    venue: 'IDAA (International Conference on Intelligent Data Analysis and Applications) • Dec 2024',
    link: 'http://researchgate.net/publication/399191646_Lightweight_Convolutional_Networks_and_Explainable_AI_for_Real-Time_and_Interpretable_Tea_Leaf_Disease_Detection',
    linkText: 'Open Official Publication on ResearchGate ↗',
    authors: 'Minhaz Alam Jisan, et al.',
    objective: 'Enable low-power edge mobile devices and field agronomists to diagnose tea plantation diseases with sub-second latency and zero cloud dependency.',
    architecture: `
      <strong>Edge-Optimized Convolutional Architecture:</strong>
      <ul>
        <li><strong>Depthwise Separable Convolutions:</strong> Factorizes standard convolutions into depthwise and pointwise layers, slashing parameters and FLOPs by over 70%.</li>
        <li><strong>Mobile Quantization:</strong> Post-training INT8 quantization allowing seamless deployment on embedded edge hardware and smartphone applications.</li>
        <li><strong>High-Speed Inference:</strong> Achieves real-time inference throughput (<50ms per frame) on handheld devices.</li>
      </ul>
    `,
    explainability: `
      <strong>Real-Time Interpretability:</strong>
      <ul>
        <li>Integrated lightweight Grad-CAM saliency generators that render visual confidence heatmaps directly on mobile screens.</li>
        <li>Allows agricultural field workers to visually inspect and trust model diagnostic reasons before administering chemical fungicides.</li>
      </ul>
    `,
    bibtex: `@inproceedings{jisan2024tea,
  title={Lightweight CNNs and Explainable AI for Real-Time Tea Leaf Disease Detection},
  author={Jisan, Minhaz Alam and others},
  booktitle={International Conference on Intelligent Data Analysis and Applications (IDAA)},
  year={2024},
  url={http://researchgate.net/publication/399191646_Lightweight_Convolutional_Networks_and_Explainable_AI_for_Real-Time_and_Interpretable_Tea_Leaf_Disease_Detection}
}`
  },

  cancer: {
    title: 'Performance Comparison of Machine Learning and Ensemble Models for Breast Cancer Diagnosis',
    venue: 'APCIT (Asia-Pacific Conference on Information Technology) • Dec 2024',
    link: 'https://ieeexplore.ieee.org/abstract/document/11411169',
    linkText: 'Open Official Paper on IEEE Xplore ↗',
    authors: 'Minhaz Alam Jisan, et al.',
    objective: 'Conduct a rigorous comparative diagnostic benchmark to identify optimal classifier architectures for early-stage malignancy screening in clinical oncology.',
    architecture: `
      <strong>Benchmarked Classifiers & Ensemble Frameworks:</strong>
      <ul>
        <li><strong>Baseline Classifiers:</strong> Support Vector Machines (RBF/Linear kernels), Random Forest, Logistic Regression, and Decision Trees.</li>
        <li><strong>Ensemble Models:</strong> Extreme Gradient Boosting (XGBoost), AdaBoost, and Soft/Hard Weighted Voting Ensembles.</li>
        <li><strong>Feature Engineering:</strong> Correlation matrix pruning, standard scaling, and recursive feature elimination (RFE) on fine needle aspirate (FNA) biometric parameters.</li>
      </ul>
    `,
    explainability: `
      <strong>Clinical Performance Metrics:</strong>
      <ul>
        <li>Evaluated via 10-fold cross-validation with prioritized focus on Sensitivity (Recall) to minimize dangerous false-negative clinical screening errors.</li>
        <li>Analyzed ROC-AUC curves and precision-recall trade-offs, demonstrating that ensemble voting architectures deliver superior generalizability over solitary classifiers.</li>
      </ul>
    `,
    bibtex: `@inproceedings{jisan2024cancer,
  title={Performance Comparison of Machine Learning and Ensemble Models for Breast Cancer Diagnosis},
  author={Jisan, Minhaz Alam and others},
  booktitle={Asia-Pacific Conference on Information Technology (APCIT)},
  year={2024},
  url={https://ieeexplore.ieee.org/abstract/document/11411169}
}`
  }
};

window.showResearchModal = function(key) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const paper = researchDetails[key];

  if (!modal || !content || !paper) return;

  content.innerHTML = `
    <div style="margin-bottom: 1.4rem;">
      <span class="badge-tag" style="margin-bottom: 0.5rem;"><i data-lucide="book-open" class="icon-xs"></i> Research Deep Dive</span>
      <h2 style="font-size: 1.45rem; font-weight: 800; margin-top: 0.4rem; line-height: 1.3;">${paper.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.88rem; margin-top: 0.3rem;">${paper.venue}</p>
      <p style="color: var(--text-muted); font-size: 0.82rem; margin-top: 0.2rem;">Authors: ${paper.authors}</p>
    </div>

    <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-md); padding: 1rem 1.2rem; margin-bottom: 1.1rem;">
      <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.25rem;">Core Research Objective:</strong>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${paper.objective}</p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem; margin-bottom: 1.1rem;">
      ${paper.architecture}
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem; margin-bottom: 1.1rem;">
      ${paper.explainability}
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.3rem; flex-wrap: wrap;">
      <a href="${paper.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; font-size: 0.85rem; padding: 0.55rem 1.1rem;">
        <i data-lucide="external-link" class="icon-xs"></i> ${paper.linkText}
      </a>
      <button class="btn btn-secondary" onclick="copyBibtex('${key}', this)" style="display: inline-flex; font-size: 0.85rem; padding: 0.55rem 1.1rem;">
        <i data-lucide="quote" class="icon-xs"></i> Copy BibTeX Citation
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

window.copyBibtex = function(key, btnElement) {
  const paper = researchDetails[key];
  if (!paper) return;

  navigator.clipboard.writeText(paper.bibtex).then(() => {
    showToast(`BibTeX citation copied to clipboard!`);
    if (btnElement) {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = `<i data-lucide="check" class="icon-xs text-emerald"></i> Copied!`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    }
  }).catch(() => {
    showToast(`Citation text ready in details modal.`);
  });
};

/* ==========================================================================
   Interactive IBM Coursera Certificate Modals
   ========================================================================== */
const certDetails = {
  cognos: {
    title: 'Data Visualization and Dashboards with Excel and Cognos',
    issuer: 'IBM (via Coursera)',
    year: '2026',
    credentialId: 'W6T14HS2665F',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/W6T14HS2665F',
    summary: 'Part of the ongoing IBM Data Analyst Professional Certificate specialization track. Focuses on data visual storytelling, multi-metric dashboard architectures, and management reporting.',
    modules: [
      'Visualizing Data with Spreadsheets: Line charts, stacked bar charts, scatter plots, and bubble charts in Excel.',
      'Advanced Excel Visuals: Treemaps, sunburst diagrams, waterfall charts, and sparklines for dense financial reports.',
      'IBM Cognos Analytics Dashboards: Creating multi-page interactive executive dashboards, setting global filters, calculating aggregations, and configuring cross-tab reports.',
      'Executive Storytelling: Designing intuitive dashboard layouts with clear visual hierarchy, KPI cards, and drill-through navigation.'
    ]
  },

  excel: {
    title: 'Excel Basics for Data Analysis',
    issuer: 'IBM (via Coursera)',
    year: '2026',
    credentialId: 'COYRPNESZ4C4',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/COYRPNESZ4C4',
    summary: 'Part of the ongoing IBM Data Analyst Professional Certificate specialization track. Establishes mastery in core spreadsheet data manipulation, hygiene, and automated formula engineering.',
    modules: [
      'Data Cleansing & Normalization: Removing duplicates, parsing text with flash fill & delimiter split, handling null values, and standardizing date formats.',
      'Formula Architecture: Writing robust VLOOKUP, XLOOKUP, INDEX/MATCH, and multi-condition SUMIFS/COUNTIFS formulas.',
      'PivotTables & Slicers: Creating multi-level cross-tabulations, grouping by date hierarchies, inserting calculated fields, and synchronizing slicers.',
      'Data Security & Integrity: Implementing data validation drop-downs, protecting worksheet ranges, and preparing workbooks for multi-user distribution.'
    ]
  },

  intro: {
    title: 'Introduction to Data Analytics',
    issuer: 'IBM (via Coursera)',
    year: '2026',
    credentialId: 'PTNA1TVJ3TX7',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/certificate/PTNA1TVJ3TX7',
    summary: 'Part of the ongoing IBM Data Analyst Professional Certificate specialization track. Provides a comprehensive survey of the modern enterprise data ecosystem, data engineering, and analytics roles.',
    modules: [
      'The Data Analytics Lifecycle: Problem definition, data gathering, ETL pipelines, exploratory data analysis, and insight presentation.',
      'Data Architecture & Repositories: Relational databases (RDBMS), NoSQL stores, data warehouses, and data lakes.',
      'Modern Analytics Tooling: Comparative evaluation of Excel, SQL, Python, R, Power BI, and IBM Cognos for diverse business needs.',
      'Data Governance & Ethics: Privacy standards, regulatory compliance, data security, and responsible quantitative analysis.'
    ]
  }
};

window.showCertModal = function(key) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const cert = certDetails[key];

  if (!modal || !content || !cert) return;

  const moduleItems = cert.modules.map(mod => `<li>${mod}</li>`).join('');

  content.innerHTML = `
    <div style="margin-bottom: 1.4rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span class="ibm-text" style="font-size: 1.2rem; font-family: var(--font-mono); font-weight: 900; color: #3b82f6;">IBM</span>
        <span class="coursera-tag" style="color: var(--text-muted); font-size: 0.8rem; font-family: var(--font-mono);">• Coursera Verified Credential</span>
      </div>
      <h2 style="font-size: 1.45rem; font-weight: 800; line-height: 1.3;">${cert.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.88rem; margin-top: 0.3rem;">Credential ID: <code>${cert.credentialId}</code> • Issued ${cert.year}</p>
    </div>

    <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1rem 1.2rem; margin-bottom: 1.2rem;">
      <strong style="color: var(--accent-emerald); display: block; margin-bottom: 0.25rem;">Credential Scope & Specialization:</strong>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${cert.summary}</p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.2rem;">
      <strong style="display: block; margin-bottom: 0.5rem;">Core Curriculum & Assessed Competencies:</strong>
      <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.5rem;">
        ${moduleItems}
      </ul>
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.3rem; flex-wrap: wrap;">
      <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; font-size: 0.85rem; padding: 0.55rem 1.1rem;">
        <i data-lucide="badge-check" class="icon-xs"></i> Verify Official Credential on Coursera ↗
      </a>
      <button class="btn btn-secondary" onclick="closeProjectModal()" style="display: inline-flex; font-size: 0.85rem; padding: 0.55rem 1rem;">
        Close
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

/* ==========================================================================
   Project Category Filter
   ========================================================================== */
function initProjectFiltering() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Project Details Modal with Direct GitHub Repo Links
   ========================================================================== */
const projectDetails = {
  retail: {
    title: 'Retail MIS Analytics Dashboard (Power BI)',
    subtitle: '12-Store Retail Chain in Bangladesh • 5-Table Star Schema • 212K Invoices',
    repoLink: 'https://github.com/Zisanminhaz/retail-mis-dashboard-powerbi',
    downloadLink: 'https://github.com/Zisanminhaz/retail-mis-dashboard-powerbi/raw/main/Retail_MIS_Dashboard.pbix',
    architecture: `
      <strong>Data Architecture & 5-Table Star Schema:</strong>
      <ul>
        <li><code>Fact_Sales</code> (212,274 rows) connected via single-direction many-to-one filters to:</li>
        <li><code>Dim_Date</code> (731 rows) — Marked official date table for time intelligence.</li>
        <li><code>Dim_Store</code> (12 rows) — Store names, cities, types, and geo coordinates.</li>
        <li><code>Dim_Product</code> (38 rows) — Products, categories, and unit costs.</li>
        <li><code>Dim_Customer</code> (2,501 rows) — Demographic segments.</li>
      </ul>
    `,
    daxSection: `
      <strong>Key DAX Measures Formulated:</strong>
      <ul>
        <li><code>YoY Growth % = DIVIDE([Total Sales] - [Sales PY], [Sales PY])</code></li>
        <li><code>Store Rank = IF(HASONEVALUE(Dim_Store[StoreName]), RANKX(ALLSELECTED(Dim_Store), [Total Sales], , DESC, DENSE))</code></li>
        <li><code>Show Top N = IF([Product Rank] <= [TopN Value], 1, 0)</code></li>
        <li><code>Avg Basket Value = DIVIDE([Total Sales], [Total Orders])</code> (Avg ৳6,249)</li>
      </ul>
    `,
    impact: 'Sales reached ৳200.1M in 2025 (+11.1% YoY). Identified Uttara (+17.5%) and Mirpur (+16.3%) as fastest growing, with Electronics driving 66% of chain revenue.'
  },

  tracker: {
    title: 'Store Sales & Employee Performance Tracker (Excel)',
    subtitle: '8-Showroom Fashion Chain • Power Query ETL (48K rows) • XLOOKUP & Slicers',
    repoLink: 'https://github.com/Zisanminhaz/store-sales-employee-tracker-excel',
    downloadLink: 'https://github.com/Zisanminhaz/store-sales-employee-tracker-excel/raw/main/Store_Sales_Tracker.xlsx',
    architecture: `
      <strong>Workbook Modeling & Automated ETL:</strong>
      <ul>
        <li>Combined 12 monthly sales CSV files into a 48,598-row normalized <code>Sales</code> table via Power Query.</li>
        <li>Connected 4 core master tables: <code>Sales</code>, <code>Stores</code>, <code>Employees</code>, and <code>Targets_Attendance</code> (480 rows).</li>
        <li>Future-proof automation: Adding a new month requires dropping the CSV into the folder and clicking <em>Data ➔ Refresh All</em>.</li>
      </ul>
    `,
    daxSection: `
      <strong>Formula Engineering & Business Rules:</strong>
      <ul>
        <li><code>Actual Sales = SUMIFS(Sales[SalesAmount], Sales[EmployeeID], [@EmployeeID], Sales[Date], ">="&[@Month], Sales[Date], "<="&EOMONTH([@Month], 0))</code></li>
        <li><code>Bonus = IF(AND([@[Achievement%]]>=100%, [@[Attendance%]]>=90%), "Eligible", "Not Eligible")</code></li>
        <li><code>Commission = XLOOKUP([@ActualSales], CommissionSlab[MinSales], CommissionSlab[Rate], 0, -1)</code> (Tiered slab match without nested IFs)</li>
      </ul>
    `,
    impact: 'Achieved ৳190.4M sales against ৳189.3M target (100.6%), paying ৳4.17M commission. Identified Dhanmondi 27 & Uttara Sector 7 beating targets by +5%, with top seller Tasnim Ahmed reaching 116% of target.'
  },

  ecommerce: {
    title: 'E-Commerce Sales & Customer Insight Dashboard (Power BI)',
    subtitle: '530K Transactions • £10.64M Revenue • UK Online Gift Retailer',
    repoLink: 'https://github.com/Zisanminhaz/ecommerce-sales-customer-insights-powerbi',
    downloadLink: 'https://github.com/Zisanminhaz/ecommerce-sales-customer-insights-powerbi/raw/main/ecommerce_dashboard.pbix',
    architecture: `
      <strong>Data Engineering & Pipeline:</strong>
      <ul>
        <li>Cleaned 541,909 raw transactions to 530,106 rows using Python pandas (<code>clean_data.py</code>).</li>
        <li>Removed 10,624 cancelled orders (<code>Quantity &le; 0</code>) and 1,179 zero-price rows.</li>
        <li>Processed 132,222 guest checkout lines with unassigned CustomerIDs as valid sales.</li>
      </ul>
    `,
    daxSection: `
      <strong>DAX Measures:</strong>
      <ul>
        <li><code>Total Revenue = SUMX ( data, data[Quantity] * data[UnitPrice] )</code> (£10.64M)</li>
        <li><code>Total Customers = DISTINCTCOUNT ( data[CustomerID] )</code> (4,338 buyers)</li>
        <li><code>Total Orders = DISTINCTCOUNT ( data[InvoiceNo] )</code> (19,962 orders)</li>
        <li><code>Avg Order Value = DIVIDE ( [Total Revenue], [Total Orders] )</code> (£533)</li>
      </ul>
    `,
    impact: 'Uncovered dramatic pre-Christmas Q4 spike peaking in November (£1.51M — 3x higher than February). Identified heavy home-market dependency (UK accounts for 84.6% / £9.0M).'
  },

  covid: {
    title: 'COVID-19 Global Dashboard (Power BI)',
    subtitle: '187 Countries • 49,068 Rows • Johns Hopkins CSSE Data',
    repoLink: 'https://github.com/Zisanminhaz/-Covid19-global-dashboard-Powerbi',
    downloadLink: 'https://github.com/Zisanminhaz/-Covid19-global-dashboard-Powerbi/raw/main/covid_dashboard.pbix',
    architecture: `
      <strong>Data Consolidation & Preparation:</strong>
      <ul>
        <li>Cleaned 49,068 daily country-level observations from Johns Hopkins CSSE and Worldometer in Excel.</li>
        <li>Normalized geocoding across 187 countries and 6 WHO regions for bubble map accuracy.</li>
        <li>Created automated Python script (<code>clean_data.py</code>) to validate headline counts.</li>
      </ul>
    `,
    daxSection: `
      <strong>DAX Measures:</strong>
      <ul>
        <li><code>Total Confirmed = SUM ( covid_19_clean_complete[Confirmed] )</code> (829M case-days)</li>
        <li><code>Confirmed (Latest) = CALCULATE ( SUM ( covid_19_clean_complete[Confirmed] ), covid_19_clean_complete[Date] = MAX ( covid_19_clean_complete[Date] ) )</code> (16.48M)</li>
        <li><code>Deaths (Latest) = CALCULATE ( SUM ( covid_19_clean_complete[Deaths] ), covid_19_clean_complete[Date] = MAX ( covid_19_clean_complete[Date] ) )</code> (654K)</li>
        <li><code>Case Fatality Rate % = DIVIDE ( [Deaths (Latest)], [Confirmed (Latest)] )</code> (3.97%)</li>
      </ul>
    `,
    impact: 'Revealed US (4.29M), Brazil (2.44M), and India (1.48M) driving 50% of global cases, with the Americas (52%) and Europe (32%) bearing 84% of reported mortality.'
  },

  olist: {
    title: 'Olist E-Commerce MIS — SQL Database & Management Reporting',
    subtitle: '1.55M Raw Rows • R$ 15.74M GMV • 10-Table 3NF Relational Schema • Stored Procedures',
    repoLink: 'https://github.com/Zisanminhaz/olist-ecommerce-mis-sql',
    downloadLink: 'https://github.com/Zisanminhaz/olist-ecommerce-mis-sql/blob/main/docs/data_dictionary.md',
    architecture: `
      <strong>Database Architecture & Data Engineering Pipeline:</strong>
      <ul>
        <li><strong>Staged ETL Pipeline:</strong> Bulk-loaded 9 Kaggle CSVs (1.55M rows) into staging tables (<code>stg_*</code>) with <code>ESCAPED BY ''</code> to protect 99,224 customer reviews from trailing backslash corruption.</li>
        <li><strong>10-Table 3NF Core Schema:</strong> Strongly typed schema with composite primary keys (e.g. <code>(order_id, order_item_id)</code>, <code>(order_id, payment_sequential)</code>), foreign keys, and index optimization.</li>
        <li><strong>17-Check Data Quality Audit:</strong> Systematic automated audit logging completeness, referential integrity, and timestamp anomalies to <code>data_quality_log</code> without silently discarding transactions.</li>
      </ul>
    `,
    daxSection: `
      <strong>MIS Analytics, Views & Stored Procedures:</strong>
      <ul>
        <li><code>mart_order_summary</code>: Materialized reporting mart collapsing 5 core tables into a flat one-row-per-order table for sub-second BI consumption.</li>
        <li><code>vw_monthly_kpi</code>: Executive dashboard feed using window function <code>LAG(gmv) OVER (ORDER BY purchase_month)</code> to compute Month-over-Month growth and YTD running totals.</li>
        <li><code>sp_monthly_mis_report('2018-05')</code>: Multi-result set stored procedure delivering executive KPI deltas, top category rankings, top sellers, and logistics regional health.</li>
        <li><strong>RFM & Seller Scorecards:</strong> Customer quintile segmentation (<code>NTILE(5)</code>) and automated vendor tiering (A - Strategic, B - Core, C - Long Tail, D - At Risk).</li>
      </ul>
    `,
    impact: 'Discovered Black Friday driving 7.2× average daily volume (1,166 orders), identified 81 At-Risk sellers generating R$ 907k with 17.4% late delivery, and proved late delivery degrades customer satisfaction from 4.32★ down to 1.70★ (70% 1-star reviews).'
  }
};

window.showProjectModal = function(key) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const item = projectDetails[key];

  if (!modal || !content || !item) return;

  const repoButtons = item.repoLink ? `
    <div style="display: flex; gap: 0.75rem; margin-top: 1.2rem; flex-wrap: wrap;">
      <a href="${item.repoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; font-size: 0.85rem; padding: 0.5rem 1rem;">
        <i data-lucide="github" class="icon-xs"></i> View Repository on GitHub ↗
      </a>
      ${item.downloadLink ? `
        <a href="${item.downloadLink}" target="_blank" class="btn btn-secondary" style="display: inline-flex; font-size: 0.85rem; padding: 0.5rem 1rem;">
          <i data-lucide="download" class="icon-xs"></i> Download Report / Workbook
        </a>
      ` : ''}
    </div>
  ` : '';

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge-tag" style="margin-bottom: 0.5rem;"><i data-lucide="layers" class="icon-xs"></i> Deep Dive Case Study</span>
      <h2 style="font-size: 1.6rem; font-weight: 800; margin-top: 0.4rem; line-height: 1.25;">${item.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem; margin-top: 0.2rem;">${item.subtitle}</p>
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.2rem;">
      ${item.architecture}
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.2rem;">
      ${item.daxSection}
    </div>

    <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1.1rem; margin-bottom: 0.5rem;">
      <strong style="color: var(--accent-emerald); display: block; margin-bottom: 0.25rem;">Business Impact & Outcome:</strong>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0;">${item.impact}</p>
    </div>

    ${repoButtons}
  `;

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
};

window.closeProjectModal = function(event) {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
  }
};

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeLightbox();
  }
});

/* ==========================================================================
   Contact Form Submission Handler
   ========================================================================== */
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const subject = document.getElementById('senderSubject').value;
  const message = document.getElementById('senderMessage').value;
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  // Simulated professional email client dispatch
  const mailtoLink = `mailto:zisan330@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i data-lucide="loader-2" class="icon-sm"></i> Opening Email Client...`;

  setTimeout(() => {
    window.location.href = mailtoLink;

    if (feedback) {
      feedback.textContent = `Thank you, ${name}! Your email draft has been generated for zisan330@gmail.com. Minhaz will get back to you promptly.`;
      feedback.className = 'form-feedback success';
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="check" class="icon-sm"></i> Message Prepared!`;

    if (window.lucide) lucide.createIcons();
  }, 600);
};

/* ==========================================================================
   ScrollSpy for Navigation
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
