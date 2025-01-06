import styles from "./SkillsList.module.scss";

interface SkillsListProps {
  list: string[][];
}

const SkillsList = ({ list }: SkillsListProps) => {
  return (
    <ul className={styles.list}>
      {list.map((skill, i) => {
        return (
          <li className={styles.item} key={i}>
            {skill[0]}
            {skill[1] && <span className={styles.accent}>{skill[1]}</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
