require "html/proofer"
require "jekyll-gh-pages"

task :test do
	sh "bundle exec jekyll build"
	HTML::Proofer.new("_site/", {
		:href_ignore => [
			"#",
			"cont-en.html",
			"cont-fr.html",
			"cont-nositemenubc-en.html",
			"cont-nositemenubc-fr.html",
			"cont-secnav1-en.html",
			"cont-secnav1-fr.html",
			"cont-secnav2-en.html",
			"cont-secnav2-fr.html",
			"cont-subsite-en.html",
			"cont-subsite-fr.html",
			"section2/index-en.html",
			"section2/index-fr.html",
			"section4/index-en.html",
			"section4/index-fr.html",
			"section4/section43/index-fr.html"
		],
		:disable_external => true,
		:alt_ignore => [
			/logo.png$/,
			# TODO: These should actually have alts
			/features\/(\w|\-|_)*\.(jpg|png)$/
		]
		}).run
end
