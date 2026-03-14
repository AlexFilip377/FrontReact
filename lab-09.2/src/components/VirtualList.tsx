import React, { useState, useMemo, useCallback, useRef, useLayoutEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems } from "../utils/generateItems";
import type { Item } from "../utils/generateItems";

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: Item[];
}

function Row({ index, style, data }: RowProps) {
  const item = data[index];
  if (!item) return null;
  return (
    <div style={{
      ...style,
      borderBottom: '1px solid #eee',
      padding: '10px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{item.title}</strong>
        <span style={{ fontSize: '12px', background: '#e0e0e0', padding: '2px 6px' }}>
          {item.category}
        </span>
      </div>
      <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>{item.description}</p>
    </div>
  );
}

export function VirtualList({ itemCount = 10000 }: { itemCount?: number }) {
  const [filter, setFilter] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [listWidth, setListWidth] = useState(600);

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
    const lowerFilter = filter.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(lowerFilter) ||
      item.category.toLowerCase().includes(lowerFilter)
    );
  }, [items, filter]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setListWidth(el.offsetWidth);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div ref={containerRef} style={{ padding: '20px', border: '2px solid #2196F3', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
      <h2>Virtualized List</h2>
      <input
        type="text"
        placeholder="Filter by title or category..."
        value={filter}
        onChange={handleFilterChange}
        style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
      />
      <div style={{ marginBottom: '10px' }}>
        Showing <strong>{filteredItems.length}</strong> of {items.length} items
      </div>

      <List
        height={500}
        itemCount={filteredItems.length}
        itemSize={100}
        width={listWidth}
        itemData={filteredItems}
      >
        {Row}
      </List>
    </div>
  );
}