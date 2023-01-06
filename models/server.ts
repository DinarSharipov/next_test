export interface ServerResponse<Item> {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}
