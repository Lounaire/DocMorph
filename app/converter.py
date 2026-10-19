"""Markdown to PDF converter module."""


def convert_markdown_to_pdf(markdown_text: str, *, options: dict | None = None) -> bytes:
    """
    TODO: Реализовать саму конвертацию.

    Должен принимать извне:
    - markdown_text (str): исходный Markdown текст для конвертации.
    - options (dict | None): опциональные параметры рендера (шрифт, размеры, отступы, шаблон и т.д.).

    Должен возвращать:
    - bytes: готовый PDF-файл в бинарном виде (для сохранения на диск или отдачи через HTTP-ответ).
    """
    raise NotImplementedError("Converter is not implemented yet.")
