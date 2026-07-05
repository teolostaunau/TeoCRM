PS D:\06. Proyectos\teocrm> npm run lint

> teocrm@0.3.0 lint
> eslint


D:\06. Proyectos\teocrm\src\app\(dashboard)\inbox\page.tsx
  11:10  warning  'toast' is defined but never used  @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\app\(dashboard)\pipelines\page.tsx
  178:7  warning  Unused eslint-disable directive (no problems were reported from 'react-hooks/set-state-in-effect')

D:\06. Proyectos\teocrm\src\app\api\whatsapp\webhook\route.ts
  4:23  warning  'downloadMedia' is defined but never used  @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\components\branding\BrandSignature.tsx
  1:10  warning  'BrandLogo' is defined but never used  @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\components\contacts\contact-detail-view.tsx
   8:29  warning  'ContactTag' is defined but never used          @typescript-eslint/no-unused-vars
   8:67  warning  'ContactCustomValue' is defined but never used  @typescript-eslint/no-unused-vars
  26:10  warning  'Badge' is defined but never used               @typescript-eslint/no-unused-vars
  27:10  warning  'ScrollArea' is defined but never used          @typescript-eslint/no-unused-vars
  38:3   warning  'X' is defined but never used                   @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\components\contacts\contact-form.tsx
  25:10  warning  'Badge' is defined but never used                                                                                                                                                                                                                                                               @typescript-eslint/no-unused-vars
  80:6   warning  React Hook useEffect has missing dependencies: 'contactTags' and 'fetchTags'. Either include them or remove the dependency array. If 'setSelectedTagIds' needs the current value of 'contactTags', you can also switch to useReducer instead of useState and read 'contactTags' in the reducer  react-hooks/exhaustive-deps

D:\06. Proyectos\teocrm\src\components\inbox\contact-sidebar.tsx
    6:10  warning  'cn' is defined but never used                                                                                                                                                                                                                                                           @typescript-eslint/no-unused-vars
   13:3   warning  'User' is defined but never used                                                                                                                                                                                                                                                         @typescript-eslint/no-unused-vars
  137:17  warning  Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

D:\06. Proyectos\teocrm\src\components\inbox\conversation-list.tsx
   16:10  warning  'Button' is defined but never used                                                                                                                                                                                                                                                       @typescript-eslint/no-unused-vars
  263:11  warning  Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

D:\06. Proyectos\teocrm\src\components\inbox\message-bubble.tsx
  110:5  warning  Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

D:\06. Proyectos\teocrm\src\components\inbox\message-composer.tsx
  115:3  warning  'conversationId' is defined but never used  @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\components\inbox\message-thread.tsx
  39:10  warning  'ScrollArea' is defined but never used  @typescript-eslint/no-unused-vars

D:\06. Proyectos\teocrm\src\proxy.ts
  16:48  warning  'options' is defined but never used  @typescript-eslint/no-unused-vars

✖ 20 problems (0 errors, 20 warnings)
  0 errors and 1 warning potentially fixable with the `--fix` option.