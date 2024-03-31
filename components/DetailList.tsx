import styles from './DetailList.module.css';
import Link from "next/link";

export async function getCover(id: string) {
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`);
    const data = await response.json();
    return data.results;
}

export default async function DetailList({ id }: { id: string }) {
    const covers = await getCover(id);

    return (
        <>
            <h2 className={styles.coverTitle}>{covers.list_name}</h2>
            <ul className={styles.coverList}>
                {covers.books.map((cover) => (
                    <li key={cover.rank} className={styles.coverItem}>
                        <div className={styles.coverLink}>
                            <div className={styles.coverImage}>
                                <img src={cover.book_image} alt={cover.title} />
                            </div>
                            <div className={styles.coverDetails}>
                                <strong>{cover.title}</strong>
                                <Link href={cover.amazon_product_url} className={styles.buyButton}>Buy Now</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}