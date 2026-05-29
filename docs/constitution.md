# Constitution: Delete the Pagination in Employee

## 1. Code quality
- Code must be modular and focused on single responsibilities.
- Use type hints for all function signatures to enhance clarity.
- Eliminate any dead code to maintain a clean codebase.
- Ensure clear and descriptive naming conventions for variables and functions.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness.
- A smoke import test is required to verify basic functionality after changes.
- Avoid flaky tests; all tests must be reliable and consistent.
- Use pytest exclusively for testing to maintain uniformity.

## 3. User experience
- Ensure the UI remains responsive across all devices and screen sizes.
- Implement appropriate loading and error states to enhance user feedback.
- Adhere to accessibility standards at least at the AA level.
- Maintain consistent patterns for components to provide a cohesive experience.

## 4. Performance
- Optimize for lightweight payloads to improve load times.
- Avoid unnecessary dependencies that could bloat the application.
- Ensure that the p50 API response time is under 1 second for optimal performance.

## 5. Spec-kit discipline
- The pipeline must execute in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.