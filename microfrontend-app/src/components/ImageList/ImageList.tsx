import { useImageQuery } from '../../hooks/useImageQuery';
import { Flyout } from '../Flyout/Flyout';
import styles from './styles.module.css';

export const ImageList = () => {
    const { images } = useImageQuery();
    if (images) {
        return (
            <ul>
                {images.map((image, index) => (
                    <li key={index} className={styles.imageListItem}>
                        <ImageListItem imgSrc={image} />
                    </li>
                ))}
            </ul>
        )
    }
    return null;
}


const ImageListItem = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <>
            <img className={styles.imageItem} src={imgSrc}></img>
            <Flyout>
                <Flyout.Toggle>
                    <Flyout.List>
                        <Flyout.ListItem>Edit</Flyout.ListItem>
                        <Flyout.ListItem>Delete</Flyout.ListItem>
                    </Flyout.List>
                </Flyout.Toggle>
            </Flyout>
        </>
    )
}

ImageList.ImageListItem = ImageListItem;