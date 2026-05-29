def paginate_employees(employees, page, per_page):
    start = (page - 1) * per_page
    end = start + per_page
    return employees[start:end]

def total_pages(total_records, per_page):
    return (total_records + per_page - 1) // per_page
