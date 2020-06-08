import React from 'react'
import styles from './card-list.module.css';

import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (<div className={styles.cardList}> {
    props.monsters.map((monster) => (<Card key={monster.id} monster={monster} />))
  }</div>)
}
