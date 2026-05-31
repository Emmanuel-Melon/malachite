import { useState, useEffect } from "react";

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [items]);

  const totalPages = Math.ceil(items.length / pageSize);
  const paged = items.slice(page * pageSize, page * pageSize + pageSize);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return { page, paged, totalPages, next, prev };
}