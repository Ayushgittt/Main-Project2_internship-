# 🚀 MERN Stack Kubernetes Deployment on AWS EKS
This project showcases the complete deployment of a **MERN (MongoDB, Express, React, Node.js)** stack application on a Kubernetes cluster using modern DevOps practices.

---

## 📦 Tech Stack Used

- **Frontend:** React.js (Vite)
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Containerization:** Docker & Docker Compose
- **Orchestration:** Kubernetes on AWS EKS (via `eksctl`)
- **Deployment:** Helm Charts, ArgoCD
- **CI/CD:** GitHub Actions
- **Storage:** Persistent Volume (PV) & Persistent Volume Claim (PVC)

---
## 🚀 Project Setup & Deployment
### 1️⃣ Dockerize the Applications
Each part of the MERN app has its own Dockerfile.

### 2️⃣ Deploy EKS Cluster
Using eksctl:


    eksctl create cluster --name mern-cluster --nodes 2 --region ap-south-1

### 3️⃣ Deploy via Helm Charts
Each component (frontend, backend, database) has its own Helm chart for templated Kubernetes deployment.
### 4️⃣ Persistent MongoDB Storage
MongoDB uses PersistentVolume and PersistentVolumeClaim for data persistence across restarts.

---
### 🔄 CI/CD Pipeline
### ✅ GitHub Actions
Three separate GitHub Actions workflows are used to prevent race conditions:

frontend.yml – builds and pushes the frontend Docker image

backend.yml – builds and pushes the backend Docker image

deploy.yml – deploys to Kubernetes (via ArgoCD sync or Helm upgrade)

### ✅ ArgoCD
ArgoCD automatically syncs manifests from GitHub and keeps the cluster state in sync.

---
## ⚠️ Challenges Faced
### 1. Connecting Backend to MongoDB:
* Issue: DNS resolution, authentication, and secret injection were tricky.
* Solution: Used environment variables and service names properly in Kubernetes.

### 2. MongoDB Storage (PV/PVC):
* Issue: Initial attempts with dynamic provisioning failed.
* Solution: Used manual PersistentVolume + PersistentVolumeClaim.

### 3. CI/CD Race Conditions:
* Issue: Frontend, backend, and deployment happening simultaneously caused conflicts.
* Solution: Broke CI into 3 separate workflows (frontend, backend, deploy).

---
## 🌟 How This project Can Be Improved
## ✅ To make the project more scalable and production-ready:

### 1. Use StatefulSet + Headless Service for MongoDB:
* Ensures stable network identity and storage for database pods.
### 2. Use Terraform for EKS & Infra as Code:
* Replaces eksctl for more reusable, automated infrastructure setup.
### 3.Add SonarQube for Code Quality & Static Analysis:
* Integrate it into GitHub Actions for early feedback during CI.

---
## Pods Deployment 

<img width="872" height="141" alt="Screenshot 2025-08-03 155727" src="https://github.com/user-attachments/assets/9039336a-a716-4f9e-bfa5-d5dd9fb3b5f4" />


<img width="1918" height="832" alt="Screenshot 2025-08-03 153216" src="https://github.com/user-attachments/assets/7bd32a15-d3ae-4aa8-a8ff-a9d143669616" />

## Application
 
<img width="1918" height="638" alt="Screenshot 2025-08-03 153132" src="https://github.com/user-attachments/assets/f957a955-3a0d-474b-b447-c913590ac2bb" />

---
## Video Link for this Project



