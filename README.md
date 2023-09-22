<!-- TODO: Adapt this README.md template -->
![i18nNumInWords Logo](https://github.com/ImBIOS/i18n-num-in-words/blob/main/i18n-num-in-words.jpg?raw=true)

# i18nNumInWords

Hello, I am i18nNumInWords and I would like to help you validate data easily using a schema. No matter if it is incoming data on a server, a form or even configuration files. I have no dependencies and can run in any JavaScript environment.

> I highly recommend you read the [announcement post](https://blog.imam.dev/introducing-i18n-num-in-words).

## Highlights

- Fully type safe with static type inference
- Small bundle size starting at less than 300 bytes
- Validate everything from strings to complex objects
- Open source and fully tested with 100 % coverage
- Many transformation and validation helpers included
- Well structured source code without dependencies
- Minimal, readable and well thought out API

## Example

First you create a schema. A schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to guarantee type safety of unknown data.

```ts
import { email, minLength, object, type Output, parse, string } from 'i18n-num-in-words'; // 0.76 kB

// Create login schema with email and password
const LoginSchema = object({
  email: string([email()]),
  password: string([minLength(8)]),
});

// Infer output TypeScript type of login schema
type LoginData = Output<typeof LoginSchema>; // { email: string; password: string }

// Throws error for `email` and `password`
parse(LoginSchema, { email: '', password: '' });

// Returns data as { email: string; password: string }
parse(LoginSchema, { email: 'jane@example.com', password: '12345678' });
```

Apart from `parse` I also offer a non-exception-based API with `safeParse` and a type guard function with `is`. You can find more about it [here](https://i18n-num-in-words.dev/guides/parse-data/).

## Feedback

Find a bug or have an idea how to improve my code? Please fill out an [issue](https://github.com/ImBIOS/i18n-num-in-words/issues/new). Together we can make the library even better!

## License

I am completely free and licensed under the [MIT license](https://github.com/ImBIOS/i18n-num-in-words/blob/main/LICENSE.md). But if you like, you can feed me with a star on [GitHub](https://github.com/ImBIOS/i18n-num-in-words).
