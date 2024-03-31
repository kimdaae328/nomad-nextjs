import Link from "next/link";
import styles from './home.module.css';

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBooksLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const lists = await getBooksLists();
  return (
    <div className={styles.listWrap}>
      <h1 className={styles.listTitle}>The New York Times Best Seller Explorer</h1>
      <ul className={styles.listList}>
        {lists.map((list) => (
          <li key={list.list_name_encoded}>
            <Link href={`/list/${list.list_name_encoded}`}>{list.display_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
