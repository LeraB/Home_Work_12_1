function showSlides(e){var s,d=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot");for(s=0;s<d.length;s++)d[s].style.display="none";for(slideIndex++,slideIndex>d.length&&(slideIndex=1),s=0;s<n.length;s++)n[s].className=n[s].className.replace(" active","");d[slideIndex-1].style.display="block",n[slideIndex-1].className+=" active"}var slideIndex=0;showSlides(),document.getElementById("slideshow-container").addEventListener("click",function(e){showSlides(e)}),document.getElementById("dots-wraper").addEventListener("click",function(e){showSlides(e)}),document.getElementById("dots-wraper").addEventListener("click",function(e){showSlides(e)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2hvd1NsaWRlcyIsImUiLCJpIiwic2xpZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZG90cyIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsInNsaWRlSW5kZXgiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFHQSxRQUFTQSxZQUFXQyxHQUNoQixHQUFJQyxHQUNBQyxFQUFTQyxTQUFTQyx1QkFBdUIsWUFDekNDLEVBQU9GLFNBQVNDLHVCQUF1QixNQUMzQyxLQUFLSCxFQUFJLEVBQUdBLEVBQUlDLEVBQU9JLE9BQVFMLElBQzNCQyxFQUFPRCxHQUFHTSxNQUFNQyxRQUFVLE1BSTlCLEtBRkFDLGFBQ0lBLFdBQWFQLEVBQU9JLFNBQVNHLFdBQWEsR0FDekNSLEVBQUksRUFBR0EsRUFBSUksRUFBS0MsT0FBUUwsSUFDekJJLEVBQUtKLEdBQUdTLFVBQVlMLEVBQUtKLEdBQUdTLFVBQVVDLFFBQVEsVUFBVyxHQUU3RFQsR0FBT08sV0FBVyxHQUFHRixNQUFNQyxRQUFVLFFBQ3JDSCxFQUFLSSxXQUFXLEdBQUdDLFdBQWEsVUFoQnBDLEdBQUlELFlBQ0pWLENBaUJDQSxjQUVESSxTQUFTUyxlQUFlLHVCQUF1QkMsaUJBQWlCLFFBQVMsU0FBVWIsR0FDL0VELFdBQVdDLEtBR2ZHLFNBQVNTLGVBQWUsZUFBZUMsaUJBQWlCLFFBQVMsU0FBVWIsR0FDdkVELFdBQVdDLEtBRWZHLFNBQVNTLGVBQWUsZUFBZUMsaUJBQWlCLFFBQVMsU0FBVWIsR0FDdkVELFdBQVdDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2xpZGVJbmRleCA9IDA7XG5zaG93U2xpZGVzKCk7XG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMoZSkge1xuICAgIHZhciBpO1xuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XG4gICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgc2xpZGVJbmRleCsrO1xuICAgIGlmIChzbGlkZUluZGV4ID4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfVxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgfVxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbi8vICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVzaG93LWNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBzaG93U2xpZGVzKGUpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90cy13cmFwZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2hvd1NsaWRlcyhlKTtcbn0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RzLXdyYXBlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBzaG93U2xpZGVzKGUpO1xufSk7Il19
