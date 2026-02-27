---
title: "AI Platform @ FenixCommerce"
year: 2025
excerpt: <b>2025 – present</b><br>Built and deployed an autonomous AI agent platform coordinating specialized agents across four production systems. Delivery date prediction, sales operations, performance monitoring, and A/B test incrementality.
collection: portfolio
---

<hr>

**Project Timeline**: 2025 – present

**Skills**: Python, XGBoost, LightGBM, PyTorch, Polars, MLflow, AWS Athena, HubSpot API, Amazon SES, Pydantic AI, Claude API, SQLite, Telegram Bot API

<hr>

## Overview

Built and operates an autonomous AI agent platform ("agentvault") at FenixCommerce that coordinates specialized AI agents across four production systems. 30+ agent sessions completed with zero data loss.

## Systems

### EDD Prediction (fenixlearn)

Replaced FenixCommerce's production delivery date prediction system. Improved on-time rate from 41.8% to 67.0% (+25% on-time improvement, +60% relative) across 5.96M orders using XGBoost with ordinal classification and asymmetric loss. Validated on 78 walk-forward temporal folds. Proved 80%+ on-time feasible with real-time scan events (+13pp additional in PoC). 326 segments probed across 10 dimensions, 15 model architectures tested.

### A/B Test Incrementality (incremsim)

Measures where the EDD widget helps vs hurts revenue, then optimizes placement. Baseline measurement: $3.46M incremental revenue across 7 retailers (1.88% lift on $183.4M base). Zone/state optimization added $1.48M on top by turning OFF EDD in segments where it hurts conversion, bringing the total to $4.93M (+43% over unoptimized). Per-retailer examples: KUIU went from $443K to $1.49M with 32 state flips (3.4x), Rylee+Cru went from net-negative (-$60K) to +$121K after 44 flips. Automated Mon+Wed pipeline with MLflow logging, heatmaps, and PDF reports.

### AI Sales Operations (salesmon)

Automated cold deal detection and outreach management for the sales team. Classifies 306 HubSpot deals via LLM, surfaces a prioritized 15-deal daily digest to VP Sales, and manages follow-up cadence (bump/reiterate/close stages). Smart client filtering via domain matching + Jaro-Winkler + LLM tiebreaker. 22-column portfolio view with outreach timeline DAG.

### Delivery Performance Monitoring (fenixalerts)

Automated daily alerting across all fulfillment centers and key retailers. Detects dark warehouses and week-over-week performance drops, generates AI-ranked business insights (Opus 4.6), and delivers R/Y/G card-based HTML email digests. Replaces manual monitoring with a single daily 6 AM PT scheduler.

## Platform (agentvault)

The coordination layer: Telegram command and control, institutional memory, PID-polling queues for sequential agent deployment, MLflow backfill watchers, and structured protocols for deployment, reporting, and session handoff. 709 tests across all repos, 73.5K lines of code, 56 agent changelogs.
