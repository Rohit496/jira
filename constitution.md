# Constitution: Employee Data Table

## 1. Code quality
- Modules must be small and focused, adhering to the single responsibility principle.
- Use type hints for all function signatures to enhance code clarity and maintainability.
- Eliminate dead code and ensure all code is actively used and necessary.
- Follow clear and descriptive naming conventions for variables, functions, and classes to improve readability.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness and reliability.
- A smoke import test is required to verify that the module can be imported without errors.
- Ensure no flaky tests are present; tests should consistently pass or fail under the same conditions.
- Use pytest as the sole testing framework for consistency and ease of use.

## 3. User experience
- Design a responsive UI that adapts to various screen sizes and devices.
- Include loading and error states to enhance user feedback during data operations.
- Ensure accessibility meets AA standards to accommodate users with disabilities.
- Maintain consistent component patterns throughout the application for a cohesive user experience.

## 4. Performance
- Optimize for lightweight payloads to minimize data transfer and improve load times.
- Avoid unnecessary dependencies that could bloat the application and slow down performance.
- Ensure that API response times are under 1 second for the 50th percentile (p50) to maintain user satisfaction.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability in the development process.