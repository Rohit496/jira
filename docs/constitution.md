# Constitution: Employee Component Pagination

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- Utilize type hints to improve code clarity and facilitate easier debugging.
- Ensure there is no dead code; all code should serve a purpose.
- Adopt clear and descriptive naming conventions for variables, functions, and components to promote understanding.

## 2. Testing standards
- Implement unit tests for all pure logic to ensure correctness and reliability.
- A smoke import test is required to verify that the component integrates correctly without errors.
- Avoid flaky tests; all tests should produce consistent results across multiple runs.
- Use pytest as the exclusive testing framework for consistency and ease of use.

## 3. User experience
- Design a responsive UI that adapts seamlessly to various screen sizes and devices.
- Include loading and error states to inform users of the component's status and handle issues gracefully.
- Adhere to accessibility standards at the AA level to ensure usability for all users, including those with disabilities.
- Maintain consistent component patterns to provide a cohesive user experience across the application.

## 4. Performance
- Ensure lightweight payloads to minimize load times and enhance user experience.
- Avoid unnecessary dependencies that could bloat the component and impact performance.
- Aim for a p50 API response time of less than 1 second to ensure quick interactions.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to maintain traceability and accountability.