/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Difficulty = 'Básico' | 'Intermedio' | 'Avanzado';

export interface Resource {
  title: string;
  url: string;
  type: 'web' | 'video';
}

export interface Topic {
  id: string;
  title: string;
  theory: string;
  resources: Resource[];
  tags: string[];
}

export interface Module {
  id: string;
  title: string;
  difficulty: Difficulty;
  icon: string;
  topics: Topic[];
}

export interface UserProgress {
  completedTopics: string[]; // IDs of completed topics
}
