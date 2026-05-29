def get_paginated_employees(employees, page, per_page):
    start = (page - 1) * per_page
    end = start + per_page
    return employees[start:end]


def total_pages(total, per_page):
    return (total + per_page - 1) // per_page
