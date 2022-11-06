#!/usr/bin/env sh

mkdir public_html 
touch public_html/index.html 
echo 'This is the main home page file.' >> public_html/index.html 
touch public_html/block.html 
echo 'This is the block.html file.' >> public_html/block.html 
touch public_html/gdw.html 
echo 'This is the gdw.html file.' >> public_html/gdw.html 
touch public_html/inline.html 
echo 'This is the inline.html file.' >> public_html/inline.html 
touch public_html/object.html 
echo 'This is the object.html file.' >> public_html/object.html 
touch public_html/special.html 
echo 'This is the special.html file.' >> public_html/special.html 
touch public_html/min.html 
echo '<!DOCTYPE html>' >> public_html/min.html 
echo '<html lang="en">' >> public_html/min.html 
echo '<head>' >> public_html/min.html 
echo '<meta charset="utf-8">' >> public_html/min.html 
echo '<title></title>' >> public_html/min.html 
echo '</head>' >> public_html/min.html 
echo '<body>\n' >> public_html/min.html 
echo '<footer style="text-align: center;">' >> public_html/min.html
echo '<a href="http://validator.w3.org/check/referer">' >> public_html/min.html
echo '<strong> HTML </strong> Valid! </a>' >> public_html/min.html
echo '</footer>' >> public_html/min.html
echo '</body>' >> public_html/min.html 
echo '</html>' >> public_html/min.html 
