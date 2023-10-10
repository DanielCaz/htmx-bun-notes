const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HTMX Notes</title>
        <script src="/public/htmx.min.js"></script>
        <link rel="stylesheet" href="/public/tailwind.css" />
      </head>
      <body>
        <header class="navbar bg-base-100 justify-around">
          <a href="/" class="btn btn-ghost normal-case text-xl">
            Notes
          </a>
          <a href="/create" class="btn btn-primary">
            Create
          </a>
        </header>
        <main hx-boost="true">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
