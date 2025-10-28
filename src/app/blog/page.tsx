import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogData";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-white text-[2.5rem] md:text-[5rem] font-[700] uppercase mb-3 md:mb-4 leading-tight">
              Blog
            </h1>
            <p className="text-customGrayAlt text-[0.938rem] md:text-[1.25rem] max-w-3xl leading-relaxed">
              Photography tips, behind-the-scenes stories, and creative insights
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-lightDark rounded-lg overflow-hidden border border-superGray hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-superGray">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <span className="text-primary text-[0.75rem] md:text-[0.875rem] font-[600] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-customGrayAlt text-[0.75rem] md:text-[0.875rem]">•</span>
                    <span className="text-customGrayAlt text-[0.75rem] md:text-[0.875rem]">{post.date}</span>
                  </div>

                  <h2 className="text-white text-[1.25rem] md:text-[1.5rem] font-[600] mb-2 md:mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-customGrayAlt2 text-[0.875rem] md:text-[1rem] leading-relaxed mb-3 md:mb-4">
                    {post.excerpt}
                  </p>

                  <span className="text-primary text-[0.75rem] md:text-[0.875rem] font-[600] uppercase tracking-wider group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
