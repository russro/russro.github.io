---
title: "Agentic Workflow Manager"
year: 2025
excerpt: <b>2025 – present</b><br>Multi-agent orchestration system for research automation. Parallel sub-agents, dependency-aware queuing, and Telegram-based status reporting.
collection: portfolio
---

<hr>

**Project Timeline**: 2025 – present

**Skills**: Python, tmux, Claude Code, Cursor Agent, Gemini CLI, MCP (Model Context Protocol), Telegram Bot API

<hr>

## Overview

Multi-agent orchestration system for research automation. Routes tasks across multiple LLM backends, deploys parallel sub-agents with dependency-aware queuing, and reports status via Telegram. Manages 30+ concurrent sessions including GPU jobs, data pipelines, and manuscript prep with zero manual intervention.

## Key Components

* **Multi-backend routing**: automatic failover across LLM backends with rate-limit tracking per model
* **Fire-and-forget deployment**: sub-agents launch in tmux sessions, report back via Telegram on completion
* **Dependency-aware queuing**: watcher scripts poll for upstream task completion before launching downstream agents
* **Session handoff**: persistent memory and context recovery across backend switches and manager restarts
* **Telegram bridge**: bidirectional communication between user and agent manager via REST API + MCP tools

