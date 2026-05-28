# Constitution: Modal Confirmation for Employee Deletion

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- Utilize type hints to improve code clarity and facilitate better tooling support.
- Ensure there is no dead code; all code should serve a purpose.
- Use clear and descriptive naming conventions for functions, variables, and components to convey intent.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness and reliability.
- A smoke import test is required to verify that the modal confirmation component integrates correctly within the application.
- Avoid flaky tests; all tests should produce consistent results under the same conditions.
- Use pytest as the sole testing framework to maintain consistency across the codebase.

## 3. User experience
- The modal confirmation UI must be responsive, adapting seamlessly to different screen sizes and orientations.
- Clearly indicate loading and error states to inform users of the current status of their actions.
- Ensure the modal meets accessibility standards at least at the AA level to accommodate all users.
- Maintain consistent component patterns throughout the application to provide a cohesive user experience.

## 4. Performance
- Design the modal confirmation to have lightweight payloads, minimizing the amount of data transferred.
- Avoid unnecessary dependencies to keep the application lean and efficient.
- Ensure that the API response time for the modal confirmation is under 1 second for the 50th percentile (p50) to enhance user satisfaction.

## 5. Spec-kit discipline
- The pipeline executes /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the previous stage's output to ensure traceability and accountability throughout the development process.