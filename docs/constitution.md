# Constitution: Employee Component Pagination

## 1. Code quality
- Maintain small, focused modules to enhance readability and maintainability.
- Utilize type hints for all function signatures to improve code clarity.
- Eliminate dead code to ensure a clean codebase.
- Use clear and descriptive naming conventions for variables, functions, and components.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness.
- Include a smoke import test to verify that the component integrates correctly.
- Ensure no flaky tests are present; tests must be reliable and consistent.
- Use pytest as the sole testing framework for all test cases.

## 3. User experience
- Design a responsive UI that adapts seamlessly to various screen sizes.
- Clearly indicate loading and error states to enhance user feedback.
- Adhere to accessibility standards at level AA to ensure inclusivity.
- Maintain consistent component patterns to provide a uniform experience across the application.

## 4. Performance
- Optimize for lightweight payloads to minimize data transfer and improve load times.
- Avoid unnecessary dependencies to keep the component lean and efficient.
- Ensure that the API response time is under 1 second for the 50th percentile (p50).

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.