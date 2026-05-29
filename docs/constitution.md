# Constitution: Employee Deletion Confirmation Modal

## 1. Code quality
- Code must be organized into small, focused modules.
- All functions and variables should have clear and descriptive naming.
- Type hints must be used to enhance code readability and maintainability.
- There must be no dead code or unused imports in the codebase.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness.
- A smoke import test must be included to verify that the modal component loads correctly.
- All tests must be stable and not flaky; they should produce consistent results.
- Only pytest should be used for testing purposes.

## 3. User experience
- The confirmation modal must be responsive and function well on various screen sizes.
- The modal should clearly indicate loading and error states to the user.
- Accessibility standards must meet at least AA compliance to ensure usability for all users.
- Consistent component patterns must be followed to maintain a cohesive user interface.

## 4. Performance
- The payload size for the modal must be lightweight to ensure quick loading times.
- Avoid unnecessary dependencies that could bloat the application.
- API calls related to the deletion process must have a p50 response time of less than 1 second.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.