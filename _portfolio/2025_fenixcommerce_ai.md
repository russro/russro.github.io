---
title: "AI Platform @ FenixCommerce"
year: 2025
excerpt: <b>2025 – present</b><br>One engineer + AI agents built and shipped 4 production systems in 14 days with $8M+ in measurable business impact — for ~$500 in compute.
collection: portfolio
---

<hr>

**Project Timeline**: Feb – Mar 2025

**Skills**: Python, XGBoost, LightGBM, PyTorch, Polars, MLflow, AWS Athena, Claude API, SQLite

<hr>

## Overview

In two weeks, one engineer orchestrated a team of AI agents to build 4 production systems with $8M+ in measurable business impact — for about $500 in compute. All four systems are live, scheduled, and running autonomously.

## Systems

### Delivery Date Prediction

Systematic ML research pipeline for delivery date accuracy. Ran 450+ experiments, trained ~30,000 models, tested 60+ engineered features, and validated across 78 temporal folds with no data leakage. *+26% relative accuracy improvement (53% to 67% on-time prediction). Production model config locked.*

### A/B Test Incrementality

Automated incrementality analysis (ATE/CATE) across geographic segments, with experiment tracking and decision reports delivered on a recurring schedule. *$1.48M revenue opportunity surfaced across 7 retailers. Replaced a full day of manual data science work.*

### AI Sales Operations

Automated deal detection, health scoring, and outreach management for the sales team. AI-based deal classification, prioritized daily digests, and multi-stage follow-up cadence management. *$6.6M in active pipeline tracked. Daily cold deal detection with AI-powered outreach.*

### Delivery Performance Monitoring

Automated daily alerting across 300+ fulfillment centers. Detects anomalies and performance drops, generates AI-ranked business insights, and delivers narrated summary digests — not just numbers, but context on what changed and why. *400K+ shipments monitored weekly. 10 stakeholders receive daily insights.*

## By the Numbers

| Metric | Value |
|--------|-------|
| Production systems deployed | 4 |
| Total experiments run | 450+ |
| Models trained | ~30,000 |
| Walk-forward evaluations | ~3,900 |
| Features engineered | 60+ |
| Git commits | 174 |
| Lines of code | 118,000+ |
| Agent sessions completed | 50+ |
| Empirical learnings indexed | 95 |
| Total compute cost | ~$500 |
| Calendar time | 14 days |
| Engineers | 1 |

## Agent Platform

The coordination layer that ties everything together. The approach mirrors how real organizations scale:

1. **Solo exploration**: One person, one AI agent at a time. Manual deploy, manual review.
2. **Parallel tracks**: 7 AI agents running simultaneously on different research tracks. Velocity jumped immediately.
3. **Managed pipelines**: Agent Manager layer with structured changelogs, automated handoffs, and PID-polling watchers that deploy the next agent when one finishes.
4. **Autonomous orchestration**: Pipeline orchestrator running 22-phase experiments with autonomous go/no-go gates. Supervisor agent validates code quality against institutional memory. Human oversight at key decision points only.

The system maintains a structured knowledge base (95 indexed learnings) that accumulates across sessions. Every experiment result, failure mode, and user preference feeds into institutional memory. New agents start smarter because they inherit all prior context.

| | Traditional | Agent-Augmented |
|---|---|---|
| Team size | 3–4 engineers | 1 engineer |
| Duration | 8–12 weeks | 2 weeks |
| Estimated cost | $150–200K+ (fully loaded) | ~$500 (compute) |
