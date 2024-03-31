import DetailList, { getCover } from '../../../../components/DetailList'; // getCover 함수를 import합니다.

interface IParams {
    params: { id: string }
}

export async function generateMetadata({ params: { id } }: IParams) {
    const cover = await getCover(id);
    return {
        title: cover.list_name
    }
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            <DetailList id={id} />
        </div>
    );
}
