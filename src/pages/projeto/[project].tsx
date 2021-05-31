import {useRouter} from 'next/router';

export default function Project(){
    const router = useRouter();
    return(
        <>
            {router.query.project}
        </>
    );
}