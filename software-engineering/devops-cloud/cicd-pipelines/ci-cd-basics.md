# CI/CD basics

Here’s a breakdown of **CI/CD (Continuous Integration / Continuous Deployment)**, covering both basic and advanced concepts relevant for modern cloud and DevOps environments:

## **CI/CD Basics**

**Continuous Integration (CI):**

- Developers frequently merge code changes into a shared repository.
- Each integration triggers an automated build and test process.
- Goal: Detect issues early, improve code quality, and reduce integration problems.

**Continuous Deployment/Delivery (CD):**

- **Continuous Delivery:** Automated process that prepares code changes for release to production, but manual approval may be required.
- **Continuous Deployment:** Every code change that passes automated tests is automatically deployed to production, with no manual intervention.
- Both aim to accelerate release cycles and reduce human error.

**Typical CI/CD Pipeline Stages:**

- **Source:** Code pushed to version control (e.g., Git).
- **Build:** Application is compiled and dependencies are resolved.
- **Test:** Automated tests (unit, integration, etc.) are run.
- **Deploy:** Application is deployed to staging/production environments.
- **Monitor:** Application health and performance are monitored post-deployment.


## **CI/CD Advanced Concepts**

**1. Pipeline as Code**

- Pipelines are defined using YAML or DSL files (e.g., GitHub Actions, Azure Pipelines, GitLab CI).
- Enables versioning, code review, and reuse of pipeline definitions.

**2. Automated Testing Types**

- **Unit Tests:** Test individual components.
- **Integration Tests:** Test combined components.
- **End-to-End (E2E) Tests:** Simulate real user scenarios.
- **Security \& Performance Tests:** Automated checks for vulnerabilities and bottlenecks.

**3. Environment Strategies**

- **Blue/Green Deployments:** Two production environments (blue and green); traffic is switched to green after successful deployment.
- **Canary Releases:** Gradually roll out new changes to a subset of users before full deployment.
- **Feature Flags:** Toggle features on/off without deploying new code.

**4. Rollbacks and Recovery**

- Automated rollback to previous stable versions if deployment fails or metrics degrade.

**5. Infrastructure as Code (IaC) Integration**

- Tools like Terraform, CloudFormation, or ARM templates provision and manage infrastructure as part of the CI/CD pipeline.

**6. Secrets Management**

- Securely inject API keys, credentials, and secrets into pipelines using vaults or managed services.

**7. Monitoring and Feedback Loops**

- Integrate monitoring tools (e.g., CloudWatch, Azure Monitor, Stackdriver) to provide real-time feedback and trigger alerts or rollbacks.


## **CI/CD in Major Cloud Providers (2025)**

| Provider | CI/CD Tools/Services | Key Features |
| :-- | :-- | :-- |
| **AWS** | CodePipeline, CodeBuild, CodeDeploy | Deep integration with AWS services, IaC with CloudFormation, scalable and customizable |
| **Azure** | Azure DevOps, GitHub Actions | End-to-end pipeline management, tight integration with Azure services, YAML pipelines |
| **GCP** | Cloud Build, Cloud Deploy | Fast builds, native Docker support, deep integration with GCP IAM and Kubernetes (GKE) |

All major providers support third-party tools (Jenkins, GitLab CI, CircleCI) and open standards, allowing organizations to mix and match based on their needs[^2] [^4] [^6].

**Summary:**
CI/CD is foundational for modern software delivery, automating code integration, testing, and deployment. Advanced practices—like pipeline as code, automated rollbacks, canary deployments, and IaC—enable high reliability, rapid iteration, and safe delivery at scale. Each major cloud offers robust, integrated CI/CD solutions tailored for their ecosystems.

[^1]: https://www.chaosgenius.io/blog/databricks-on-aws-azure-gcp/

[^2]: https://kaopiz.com/en/articles/aws-vs-azure-vs-google-cloud/

[^3]: https://kitrum.com/blog/aws-vs-gcp-comparative-guide-cdn-pricing-biggest-drawbacks/

[^4]: https://www.channelinsider.com/cloud-computing/aws-vs-azure-vs-google-cloud/

[^5]: https://thecodev.co.uk/cloud-providers-comparison-2025/

[^6]: https://cloud.google.com/docs/get-started/aws-azure-gcp-service-comparison

[^7]: https://www.linkedin.com/pulse/cloud-providers-comparison-aws-vs-azure-google-gcp-2025-lászló-halász-mlulf

[^8]: https://www.incredibuild.com/blog/cloud-services-comparison-a-practical-developer-guide

[^9]: https://www.kellton.com/kellton-tech-blog/comparing-aws-azure-and-gcp

