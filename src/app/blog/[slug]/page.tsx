import type { Metadata } from "next";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Image from "next/image";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { title: "Blog | Leekshotit Photography" };
  }

  return {
    title: `${post.title} | Leekshotit Photography`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Leekshotit Photography`,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />
      <div className="pt-32 md:pt-40 lg:pt-44">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            {/* Back Link */}
            <Link href="/blog" className="text-primary text-[0.875rem] font-[500] hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-customGrayAlt light:text-gray-400 text-[0.875rem]">•</span>
                <span className="text-customGrayAlt light:text-gray-500 text-[0.875rem]">{post.date}</span>
              </div>

              <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-customGrayAlt light:text-gray-600 text-[1.125rem] leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-10 border border-superGray light:border-gray-200 relative">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 80vw, 100vw"
                className="object-cover"
                priority
                quality={90}
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert light:prose prose-lg max-w-none
                prose-headings:text-white light:prose-headings:text-gray-900 prose-headings:font-[600] prose-headings:uppercase
                prose-p:text-customGrayAlt light:prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white light:prose-strong:text-gray-900 prose-strong:font-[600]
                prose-ul:text-customGrayAlt light:prose-ul:text-gray-600 prose-ul:list-disc prose-ul:ml-6
                prose-li:mb-2
                prose-h2:text-[2rem] prose-h2:mb-4 prose-h2:mt-10
                prose-h3:text-[1.5rem] prose-h3:mb-3 prose-h3:mt-8"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </article>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-superGray light:border-gray-200 max-w-4xl">
              <h2 className="text-white light:text-gray-900 text-[2rem] font-[600] uppercase mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-lightDark light:bg-gray-50 rounded-lg overflow-hidden border border-superGray light:border-gray-200 hover:border-primary transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-superGray light:bg-gray-100 relative">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        quality={85}
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider mb-2 inline-block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-white light:text-gray-900 text-[1.125rem] font-[600] group-hover:text-primary transition-colors leading-tight">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
