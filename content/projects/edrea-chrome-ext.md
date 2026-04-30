---
title: "Edreaglobal Form AutoFiller Extension"
description: "Chrome extension development for automating visa form submission workflows with applicant search, multi-step form filling, and document upload automation."
published: 2025-01-13
keywords: "chrome extension, visa form automation, recruitment operations, api integration, workflow automation"
status: "done"
category: ["Web Development", "API Integration"]
---

We developed the Edreaglobal Form AutoFiller Extension to accelerate visa form submission workflows for recruitment operations. The extension connects directly to Edrea's recruitment API, allows operators to select applicants quickly, and auto-populates multi-step consular forms with structured data and supporting documents in seconds.

## Key Features

- **Applicant Search and Selection**
    - Built a popup-based interface with live search to find applicants by name or application number.
    - Connected the extension to Edrea's recruitment API for fast applicant lookup and detail retrieval.
    - Stored selected applicant data and arrival date in Chrome synchronized storage for faster repeated use.

- **Multi-Step Form Automation**
    - Mapped applicant data into a five-step consular form workflow covering identity, address, travel, and host information.
    - Automated repetitive data entry to reduce manual retyping across multiple stages.
    - Added domain validation guardrails to ensure the extension only runs on the intended consular website.

- **Document Upload Automation**
    - Fetched remote file URLs and converted them into browser `File` objects for programmatic uploads.
    - Automated supporting document attachment on document-heavy steps.
    - Reduced manual file selection work and improved consistency during submission.

- **Operational Efficiency**
    - Reduced manual errors in passport, contact, and applicant profile fields.
    - Increased processing throughput for recruitment operations teams handling multiple applications.
    - Created a lightweight workflow that is practical for daily production use.

## Impact and Success

This extension turned a repetitive and error-prone internal workflow into a faster and more standardized process. By combining applicant lookup, structured form mapping, and automated uploads, it improved operational speed, reduced input mistakes, and gave recruitment teams a high-impact productivity tool for visa application processing.
