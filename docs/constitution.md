# Constitution: Fix the Modal UI for Employee Deletion

## 1. Code quality
- Ensure small, focused modules for better maintainability.
- Use type hints for all function signatures to improve readability and reduce errors.
- Eliminate any dead code to keep the codebase clean and efficient.
- Adopt clear and descriptive naming conventions for variables and functions.

## 2. Testing standards
- Implement unit tests for all pure logic components to ensure reliability.
- Include a smoke import test to verify that the modal loads correctly.
- Avoid flaky tests; ensure that all tests are stable and produce consistent results.
- Use pytest exclusively for testing to maintain consistency across the codebase.

## 3. User experience
- Design a responsive UI that adapts seamlessly to different screen sizes.
- Clearly indicate loading and error states to enhance user feedback.
- Ensure compliance with accessibility standards (AA) to accommodate all users.
- Maintain consistent component patterns throughout the application for a cohesive experience.

## 4. Performance
- Optimize for lightweight payloads to improve loading times.
- Avoid unnecessary dependencies that could bloat the application.
- Ensure that API responses achieve a p50 latency of less than 1 second.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.