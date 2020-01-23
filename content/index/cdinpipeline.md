---
order: 5
component: flowchart
title: Content delivery in the Redhat neighbourhood
icon: fas fa-map-signs
graph:
  - id: "1"
    text: "fa:fa-industry Redhat Build system"
    link: "---"
    next: ["2"]
    editable: false
    group: "pipeline"
  - id: "11"
    text: "fa:fa-headset IT support"
    link: "---"
    next: ["2"]
    editable: false
    group: "support"
  - id: "111"
    text: "fa:fa-tasks Release engineering"
    link: "---"
    next: ["2"]
    group: "configuration"
    editable: false
  - id: "2"
    text: "fa:fa-shipping-fast Content Delivery "
    link: "---"
    next: ["3"]
    editable: false
    group: "pipeline"
    style: fill:#ad0000,stroke:#c90000,font-size:20px,stroke-width:2px
  - id: "3"
    text: "fa:fa-check-double Content testing"
    link: "---"
    next: ["4"]
    editable: false,
    group: "pipeline"
  - id: "4"
    text: "fa:fa-shopping-cart Redhat Customers"
    link: "---"
    group: "pipeline"
    editable: false
---

Content Delivery team maintains tools which lie at the end of "the pipeline". To explain it simply, our tooling basically gets a finalized and verified package and then our tooling pushes it to a customer reachable destination like Red Hat CDN or Customer Portal. We maintain those tools with the assistance of the IT department and System operators.
