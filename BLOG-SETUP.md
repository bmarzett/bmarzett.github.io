# Blog / WordPress setup

The site now includes `blog.html`, designed to work as a custom front end for WordPress.

## Recommended setup

Use WordPress as the content management system and keep this site as the visual front end. This gives you the clean custom design while letting you create, schedule, categorize and edit posts in WordPress.

1. Create a WordPress installation on a subdomain such as `blog.yourdomain.com`.
2. In WordPress, create normal Posts and Categories. Suggested categories: Amazon, Strategy, Profitability, Marketplaces.
3. Open `blog.html` and set `WP_API` to:
   `https://blog.yourdomain.com/wp-json/wp/v2/posts`
4. Publish a post in WordPress. The blog page will retrieve published posts automatically.
5. Add featured images to posts. The page uses WordPress featured media when available.

WordPress exposes posts through `/wp-json/wp/v2/posts`, including title, content, excerpt, date, categories/tags and featured media. Public published posts can be retrieved without exposing your WordPress admin credentials.

## Important architecture note

For the cleanest long-term setup, I recommend keeping WordPress on a subdomain and using this custom site as a headless front end. Your readers see the custom Brandon Marzett design, while you use WordPress admin to write and publish.

The current blog page intentionally falls back to three starter article ideas if WordPress is not connected yet.
