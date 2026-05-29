# Constitution: Fix the Pagination Design

## 1. Code quality
- Ensure small, focused modules for pagination components.
- Use type hints for all functions and components related to pagination.
- Eliminate any dead code related to previous pagination implementations.
- Maintain clear and descriptive naming conventions for all pagination-related variables and functions.

## 2. Testing standards
- Implement unit tests for all pagination logic to ensure correctness.
- Include a smoke import test to verify that the pagination component loads without errors.
- Ensure that all tests are stable and do not produce flaky results.
- Utilize pytest as the exclusive testing framework for all pagination tests.

## 3. User experience
- Design the pagination UI to be responsive across all devices and screen sizes.
- Clearly indicate loading and error states during pagination actions.
- Adhere to accessibility standards at the AA level to ensure usability for all users.
- Maintain consistent component patterns throughout the pagination design to enhance familiarity and usability.

## 4. Performance
- Optimize pagination to ensure lightweight payloads for data retrieval.
- Avoid unnecessary dependencies that could bloat the pagination component.
- Ensure that the average response time for pagination API calls is less than 1 second for the 50th percentile (p50).

## 5. Spec-kit discipline
- The pipeline executes /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact related to the pagination design MUST trace back to the output of the previous stage, ensuring a clear lineage and accountability in the development process.