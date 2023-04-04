import { component$, useComputed$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {red} from './styles.css'
export default component$(() => {
  return (
    <>
      <h1>Vanilla-extract HMR issue</h1>
      <p class={red}>This text is red</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
