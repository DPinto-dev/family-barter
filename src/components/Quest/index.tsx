import React from "react";

import Show from "components/Quest/Show";

import "./styles.scss";

type DifficultyTypes = "common" | "uncommon" | "rare" | "legendary" | "epic";

interface QuestProps {
  title: string;
  difficulty: DifficultyTypes;
}

export default function Quest(props: QuestProps) {
  const { title, difficulty } = props;
  return (
    <article className="quest" data-testid="quest">
      <Show title={title} difficulty={difficulty}></Show>
    </article>
  );
}