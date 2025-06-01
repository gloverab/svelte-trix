# svelte-trix

Svelte 5 wrapper around the [Trix WYSIWYG editor](https://github.com/basecamp/trix) from Basecamp. For use in Svelte or Sveltekit projects using Svelte 5.x.x or later.

## Getting Started

### Install via npm

```bash
npm install svelte-trix --save-dev
```

This will install svelte-trix as well as the base Trix library.

## Usage

### Bound Value
```svelte
<script lang='ts'>
  import { TrixEditor } from 'svelte-trix';

  let value = $state('');
</script>

<TrixEditor
  bind:value
/>
```

### With onChange
```svelte
<script lang='ts'>
  import { TrixEditor } from 'svelte-trix';

  let value = $state('');

  const handleChange = (htmlString: string) => {
    // htmlString is a string of HTML that TrixEditor sends back.
    value = htmlString
  }
</script>

<TrixEditor
  onChange={handleChange}
/>
```