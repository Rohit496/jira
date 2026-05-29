# Constitution: Employee Pagination

## 1. Code quality
- Modules must be small and focused, each handling a single responsibility.
- Use type hints for all function signatures to improve readability and maintainability.
- Eliminate dead code and ensure all code is necessary and functional.
- Adopt clear and descriptive naming conventions for variables, functions, and classes.

## 2. Testing standards
- Implement unit tests for all pure logic components to ensure correctness.
- A smoke import test is required to verify that the pagination module integrates correctly with the overall application.
- Ensure that no flaky tests are present; tests must be reliable and consistent.
- Utilize pytest as the sole testing framework for all test cases.

## 3. User experience
- Design a responsive UI that adapts seamlessly across various devices and screen sizes.
- Include loading and error states to enhance user feedback during data fetching.
- Adhere to accessibility standards at least at the AA level to ensure usability for all users.
- Maintain consistent component patterns throughout the pagination implementation for a cohesive user experience.

## 4. Performance
- Ensure that payloads are lightweight to optimize loading times and reduce bandwidth usage.
- Avoid unnecessary dependencies that could bloat the application and slow down performance.
- Aim for a p50 API response time of less than 1 second to provide a smooth user experience.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage, ensuring traceability and accountability throughout the development process.