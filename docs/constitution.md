# Constitution: Fix the Pagination Design

## 1. Code quality
- Modules must be small and focused, adhering to the single responsibility principle.
- Type hints should be used throughout the codebase to enhance readability and maintainability.
- Dead code must be removed to keep the codebase clean and efficient.
- Clear and descriptive naming conventions should be employed for variables, functions, and components.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be included to verify that the pagination component integrates correctly within the application.
- All tests should be stable and non-flaky, providing consistent results on each run.
- Only pytest should be used as the testing framework to maintain uniformity.

## 3. User experience
- The pagination UI must be responsive, adapting seamlessly to different screen sizes and devices.
- Loading and error states should be clearly defined and visually communicated to users.
- The design must meet accessibility standards at the AA level to ensure inclusivity for all users.
- Consistent component patterns should be followed to maintain a cohesive look and feel across the application.

## 4. Performance
- Payloads related to pagination must be lightweight to minimize load times and improve user experience.
- Unnecessary dependencies should be avoided to reduce the overall size of the application.
- API responses for pagination should aim for a p50 response time of less than 1 second to ensure quick interactions.

## 5. Spec-kit discipline
- The pipeline executes /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the previous stage's output, ensuring traceability and accountability throughout the development process.