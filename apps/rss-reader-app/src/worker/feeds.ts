export type Entry = {
  title: string,
  url: string,
  created_date: string
}

export type Feed = {
  name: string,
  category: string,
  entries: Entry[],
}
