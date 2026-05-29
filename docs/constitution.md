# Constitution: Fix the Space Between Edit and Delete Buttons

## 1. Code quality
- Code must be organized into small, focused modules.
- Use type hints for all functions and methods.
- Eliminate any dead code to maintain clarity.
- Ensure clear and descriptive naming conventions for variables and functions.

## 2. Testing standards
- Implement unit tests for all pure logic components.
- A smoke import test is required to verify basic functionality.
- Ensure that there are no flaky tests; all tests must be reliable and consistent.
- Use pytest as the exclusive testing framework.

## 3. User experience
- The UI must be responsive across all devices and screen sizes.
- Clearly define loading and error states for user feedback.
- Adhere to accessibility standards at least at AA level.
- Maintain consistent component patterns throughout the application.

## 4. Performance
- Ensure that payloads are lightweight to optimize loading times.
- Avoid unnecessary dependencies that could bloat the application.
- Aim for a p50 API response time of less than 1 second.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage, ensuring traceability and accountability throughout the development process.