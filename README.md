# Automated Cloud-Native Microservice Architecture

## Project Overview
This repository contains a fully automated, cloud-native multi-tier microservice architecture designed for resilient system performance and highly available enterprise environments. The deployment orchestrates a high-performance **Node.js REST API**, an integrated **Nginx Reverse Proxy & Load Balancer**, and a **PostgreSQL Database Engine** within a secure containerized network.

## Core Architecture Features
* **Reverse Proxy & Traffic Management:** Nginx configuration optimized to act as the primary ingress layer, abstracting internal microservice runtime structures.
* **Database Resiliency:** PostgreSQL engine isolated securely within a dedicated storage volume with integrated automated health-checks to block application runtime starts until the database backend is fully ready.
* **Linux Automation & Health Auditing:** Custom Bash scripts handle automatic infrastructure tearing, image rebuilding, configuration validation, and automated network response inspection.
* **Enterprise Orchestration Blueprints:** Includes production-ready Kubernetes manifests (`Deployment` & `Service` specifications) using declarative schema practices for cloud-native zero-downtime scaling.

## Infrastructure Directory Layout
* `app/`: Production application logic, package specifications, dynamic variables, and custom Nginx reverse proxy configuration matrices.
* `k8s/`: Declarative cluster state parameters for rapid deployment onto cloud managed container services.
* `scripts/`: Production Linux lifecycle management automation utilities.

## Local Operational Controls
To initiate the fully automated build, dependency installation, container mapping, network linking, and health auditing sequence, execute:
```bash
./scripts/deploy.sh
