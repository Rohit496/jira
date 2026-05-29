# Constitution: Fix the Pagination Design

## 1. Code quality
- Ensure code is modular and focused on single responsibilities.
- Use type hints for better readability and maintainability.
- Eliminate any dead code to keep the codebase clean.
- Adopt clear and descriptive naming conventions for functions and variables.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness.
- Include a smoke import test to verify that the pagination component loads correctly.
- Avoid flaky tests; all tests must produce consistent results.
- Utilize pytest as the sole testing framework for uniformity.

## 3. User experience
- Design a responsive UI that adapts seamlessly across devices.
- Incorporate loading and error states to enhance user feedback.
- Ensure accessibility compliance at AA level to accommodate all users.
- Maintain consistent component patterns to provide a cohesive experience.

## 4. Performance
- Optimize for lightweight payloads to reduce load times.
- Avoid unnecessary dependencies that could bloat the project.
- Ensure that API response times are under 1 second for the 50th percentile (p50).

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.