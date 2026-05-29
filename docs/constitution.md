# Constitution: Employee Pagination

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and methods should include type hints for clarity and type safety.
- Dead code must be removed to ensure a clean codebase.
- Variable and function names should be descriptive and follow consistent naming conventions.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be included to verify that the pagination component integrates correctly.
- All tests must be stable and not flaky; they should produce consistent results.
- Only pytest should be used for testing to maintain uniformity in the testing framework.

## 3. User experience
- The pagination UI must be responsive, adapting seamlessly to different screen sizes and devices.
- Loading and error states must be clearly defined and user-friendly to enhance the overall experience.
- The component must meet accessibility standards at the AA level to ensure inclusivity for all users.
- Consistent component patterns should be followed to maintain a cohesive design throughout the application.

## 4. Performance
- Pagination must utilize lightweight payloads to minimize data transfer and improve load times.
- Avoid unnecessary dependencies to keep the project lightweight and efficient.
- API response times must be optimized to ensure that the p50 response time is less than 1 second.

## 5. Spec-kit discipline
- The pipeline executes /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the previous stage's output to ensure traceability and accountability.