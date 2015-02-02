#/usr/bin/bash
cd svg/
for i in *.svg
do 
if [[ $i -nt `echo "../20/"$i | sed -e 's/svg$/png/'` ]]; then
echo $i
rsvg-convert $i --zoom=0.15625 -o `echo "../20/"$i | sed -e 's/svg$/png/'`
rsvg-convert $i --zoom=0.25 -o `echo "../32/"$i | sed -e 's/svg$/png/'`
fi
done
